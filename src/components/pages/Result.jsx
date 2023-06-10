import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswerList from "../../hooks/useAnswerList";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { loading, error, answer } = useAnswerList(id);
  //console.log(answer);
  //const { state } = useLocation();
  /* const location = useLocation();const { qna } = location.state; */
  //console.log(location);
  /* const { qna } = state;
  console.log(qna);

  function Calculate() {
    let score = 0;

    answer.forEach((question, index1) => {
      let correctIndex = [],
        checkedIndex = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = Calculate();
  console.log(userScore);
 */
  const { state } = useLocation();
  const { qna } = state;

  function Calculate() {
    let score = 0;
    answer.forEach((question, index1) => {
      let correctIndex = [],
        checkedIndex = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = Calculate();

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>There was an error!</div>}
      {answer && answer.length > 0 && (
        <>
          <Summary score={userScore} noq={answer.length} />
          <Analysis answer={answer} />
        </>
      )}
    </>
  );
}
