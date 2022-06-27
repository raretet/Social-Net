import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.posts__item}>
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
      <input />
      <input />
    </div>
  );
}

export default Post;
