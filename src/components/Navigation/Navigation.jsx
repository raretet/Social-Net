import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__item}>
        <a href="h">Profile</a>
      </div>
      <div className={classes.nav__item}>
        <a href="h">Messages</a>
      </div>
      <div className={classes.nav__item}>
        <a href="h">News</a>
      </div>
      <div className={classes.nav__item}>
        <a href="h">Music</a>
      </div>
      <div className={classes.nav__item}>
        <a href="h">Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;
