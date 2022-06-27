import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <div>new post</div>
      <div className={c.posts}>
        <Post message="hi, how are you?" like="15" />
        <Post message="goodbye" like="25" />
      </div>
    </div>
  );
}

export default MyPosts;
