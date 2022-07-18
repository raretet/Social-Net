import { connect } from "react-redux";
import { WithAuthNavigate } from "../../hoc/WithAuthReducer";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../Redux/MessagesReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

let AuthNavigateComponent = WithAuthNavigate(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNavigateComponent);

export default DialogsContainer;
