import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsELements = props.posts.map((p) => {
    return <Post message={p.message} like={p.likesCount} />;
  });

  let addPost = () => {
    alert(1);
  };

  return (
    <div>
      <textarea></textarea>
      <button onClick={addPost}>Add post</button>
      <button>Remove</button>
      <div>new post</div>
      <div className={c.posts}>{postsELements}</div>
    </div>
  );
}

export default MyPosts;
