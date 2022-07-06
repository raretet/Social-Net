import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../Redux/MessagesReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
