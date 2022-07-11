import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
  });

  let messagesElements = state.messagesData.map((m) => {
    return <MessageItem text={m.message} key={m.id} />;
  });

  let newMesasgesText = state.newMesasgesText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__items}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div className={c.chatting}>
          <div>
            <textarea
              value={newMesasgesText}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
