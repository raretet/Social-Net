import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElements = props.state.messagesData.map((m) => {
    return <MessageItem text={m.message} />;
  });

  let sendMessageBtn = React.createRef();

  let sendMessage = () => {
    alert(sendMessageBtn.current.value);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>{dialogsElements}</div>
      <div className={c.messages}>
        {messagesElements}
        <div className={c.chatting}>
          <textarea ref={sendMessageBtn}></textarea>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
