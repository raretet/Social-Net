import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/800x300" alt="main" />
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
