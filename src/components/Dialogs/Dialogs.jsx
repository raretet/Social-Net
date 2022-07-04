import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../Redux/MessagesReducer";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogsElements = state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElements = state.messagesData.map((m) => {
    return <MessageItem text={m.message} />;
  });

  let newMesasgesText = state.newMesasgesText;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(text));
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
