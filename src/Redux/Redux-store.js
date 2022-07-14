import UsersReducer from './/UsersReducer'
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import { combineReducers,legacy_createStore} from "redux";
import AuthReducer from './authReducer';

let reducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});

let store = legacy_createStore(reducer);

window.store = store;

export default store;

