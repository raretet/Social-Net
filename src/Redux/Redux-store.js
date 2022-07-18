import UsersReducer from './/UsersReducer'
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import { applyMiddleware, combineReducers,legacy_createStore} from "redux";
import AuthReducer from './authReducer';
import thunk from 'redux-thunk';

let reducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});

let store = legacy_createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;

