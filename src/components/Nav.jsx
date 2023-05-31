import logo from "../assets/images/logo192.png";
import classes from "../styles/Nav.module.css";
import { Account } from "./Account";

export function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with React" />
            <h3>Learn with React</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
