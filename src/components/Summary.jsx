import { useMemo } from "react";
import defaultImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  const getKeyWord = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 25) {
      return "looser";
    } else if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 90) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [noq, score]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyWord}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : defaultImage;

  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>
        {loading && <div className={classes.badge}>Loading Your Badge....</div>}
        {error && <div className={classes.badge}>An Error has occured!</div>}
        {!loading && !error && (
          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
        )}
      </div>
    </>
  );
}
