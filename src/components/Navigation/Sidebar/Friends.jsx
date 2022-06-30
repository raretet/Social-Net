import c from "./Sidebar.module.css";

function Friend(props) {
  return (
    <div className={c.sidebar__friends}>
      <div className={c.photo}></div>
      <div className={c.name}>{props.name}</div>
    </div>
  );
}

export default Friend;
