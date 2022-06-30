import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsELements = props.posts.map((p) => {
    return <Post message={p.message} like={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPosts();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <textarea
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost}>Add post</button>
      <div>new post</div>
      <div className={c.posts}>{postsELements}</div>
    </div>
  );
}

export default MyPosts;
