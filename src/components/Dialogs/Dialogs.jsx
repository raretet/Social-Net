import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElements = props.state.messagesData.map((m) => {
    return <MessageItem text={m.message} />;
  });

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
