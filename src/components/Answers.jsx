import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <Checkbox
          text="A New Hope 1"
          l_for="option1"
          id="option1"
          className={classes.answer}
        />
        <Checkbox
          text="A New Hope 2"
          l_for="option2"
          id="option2"
          className={classes.answer}
        />
        <Checkbox
          text="A New Hope 3"
          l_for="option3"
          id="option3"
          className={classes.answer}
        />
        <Checkbox
          text="A New Hope 4"
          l_for="option4"
          id="option4"
          className={classes.answer}
        />
      </div>
    </>
  );
}
