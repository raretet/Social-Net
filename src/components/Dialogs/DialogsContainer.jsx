import { connect } from "react-redux";
import { compose } from "redux";
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthNavigate
)(Dialogs);
