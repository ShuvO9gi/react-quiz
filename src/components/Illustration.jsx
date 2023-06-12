import classes from "../styles/Illustration.module.css";

export default function Illustration({ ...rest /* src, alt */ }) {
  return (
    <div className={classes.illustration}>
      {/*  eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} /* src={src} alt={alt} */ />
    </div>
  );
}
