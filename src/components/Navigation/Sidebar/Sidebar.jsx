import c from "./Sidebar.module.css";
import Friend from "./Friends";

function Sidebar(props) {
  let sidebarELements = props.friends.map((p) => {
    return <Friend name={p.name} />;
  });

  return (
    <div className={c.sidebar}>
      <div className={c.sidebar__title}>Friends</div>
      <div className={c.sidebar__eLements}>{sidebarELements}</div>
    </div>
  );
}

export default Sidebar;
