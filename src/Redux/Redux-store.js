
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import MessagesReducer from "./MessagesReducer";
import { combineReducers,legacy_createStore} from "redux";

let reducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    sidebar: SidebarReducer,
});

let store = legacy_createStore(reducer);

export default store;

