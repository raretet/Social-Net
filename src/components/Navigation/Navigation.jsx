import c from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function Navigation(props) {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink
          to="/Profile"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${c.item} ${c.active}`}>
        <NavLink
          to="/Dialogs"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink
          to="i"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          News
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink
          to="o"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink
          to="h"
          className={(navData) => (navData.isActive ? c.active : c.item)}
        >
          Settings
        </NavLink>
      </div>
      <Sidebar friends={props.state.friends} />
    </nav>
  );
}

export default Navigation;
