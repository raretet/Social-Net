import c from "./ProfileInfo.module.css";

const ProfileInfo = (p) => {
  return (
    <div className={c.profile__info}>
      <div>
        <img src="https://via.placeholder.com/800x300" alt="main" />
      </div>
      <div>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
