import Preloader from "../../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={c.profile__info}>
      {/* <div>
        <img src="https://via.placeholder.com/800x300" alt="main" />
      </div> */}
      <div>
        <img src={props.profile.photos.large} alt="profile" />
        {props.profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileInfo;
