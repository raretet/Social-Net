import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.posts__item}>
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  );
}

export default Post;
