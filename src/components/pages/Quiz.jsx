import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestionList from "../../hooks/useQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionsIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLocation(); //access parameter from Link router component
  console.log(data);
  const { loading, error, question } = useQuestionList(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: question,
    });
  }, [question]);

  //handle user marked quiz
  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionsIndex: index,
      value: e.target.checked,
    });
  };

  //handle forward button for moving to the next question
  function NextQuestion() {
    //console.log("next");
    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  }

  //handle back button for moving to the previous question
  function PrevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= question.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  }

  //handle progressbar percentage
  const percentage =
    question.length > 0 ? ((currentQuestion + 1) / question.length) * 100 : 0;

  //handle result with submit button
  async function SubmitResult() {
    const { uid } = currentUser;
    console.log(currentUser);

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, { state: { qna } });
  }

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input /* = {true} */
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            prev={PrevQuestion}
            next={NextQuestion}
            progress={percentage}
            submit={SubmitResult}
          />
          <MiniPlayer
            /* id={id} */ id={data.state.id}
            title={data.state.videoTitle}
          />
        </>
      )}
    </>
  );
}
