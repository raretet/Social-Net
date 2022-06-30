import c from "./../Dialogs.module.css";

const MessageItem = (props) => {
  return <div className={c.message__item}>{props.text}</div>;
};

export default MessageItem;
