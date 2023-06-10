import Question from "./Question";

export default function Analysis({ answer }) {
  return (
    <div class="analysis">
      <h1>Question Analysis</h1>
      <Question answer={answer} />
    </div>
  );
}
