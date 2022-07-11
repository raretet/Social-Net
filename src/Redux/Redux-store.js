import UsersReducer from './/UsersReducer'
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import { combineReducers,legacy_createStore} from "redux";

let reducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
});

let store = legacy_createStore(reducer);

window.store = store;

export default store;

