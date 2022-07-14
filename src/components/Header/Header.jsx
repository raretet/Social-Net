import { NavLink } from "react-router-dom";
import c from "./Header.module.css";

function Header(props) {
  return (
    <header className={c.header}>
      <img src="https://via.placeholder.com/40x40" alt="logo" />

      <div className={c.login_block}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"}>{props.login}</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
