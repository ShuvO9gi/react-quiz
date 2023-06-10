import { useRef, useState } from "react";
import image from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  function toogleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <>
      <div
        className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        ref={buttonRef}
        onClick={toogleMiniPlayer}
      >
        <span className={`material-icons-outlined ${classes.open}`}>
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${classes.close}`}
          onClick={toogleMiniPlayer}
        >
          close
        </span>
        <img src={image} alt="MiniPlayer" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </>
  );
}
