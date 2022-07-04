import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";

let store = {
_state: {
    profilePage: {   
         posts: [
        { id: 1, message: "Hi!", likesCount: 22 },
        { id: 2, message: "Hello!", likesCount: 12 },
        { id: 3, message: "Gay!", likesCount: 45 },
        { id: 4, message: "Privet!", likesCount: 14 },
],
 newPostText: '',},
    
    
    messagesPage: {
        messagesData: [
          {
            id: 1,
            message: "Hi",
          },
          {
            id: 2,
            message: "Hello World",
          },
          {
            id: 3,
            message: "How are you?",
          },
          {
            id: 4,
            message: "Hello",
          },
          {
            id: 5,
            message: "How",
          },
          {
            id: 6,
            message: "What about you?",
          },
        ],    
        dialogsData: [
            {
              id: 1,
              name: "Kristina",
            },
            {
              id: 2,
              name: "Vlad",
            },
            {
              id: 3,
              name: "Danya",
            },
            {
              id: 4,
              name: "Vova",
            },
            {
              id: 5,
              name: "Tyoma",
            },
            {
              id: 6,
              name: "Rusya",
            },
          ], newMessageText: '',},
    sidebar: {
        friends: [{
            id: 1,
            name: 'Alex',
        },
        {
            id: 2,
            name: 'Rusya',
        },
        {
            id: 3,
            name: 'Kristina',
        },
    ]
    },
},

_callSubscriber() {
  console.log(121212);
},

getState() {
  return this._state;
},

  subscribe(observer) {
  this._callSubscriber = observer;
},

  dispatch(action) {

    this._state.profilePage = ProfileReducer(this._state.profilePage,action);
    this._state.messagesPage = MessagesReducer(this._state.messagesPage, action);
    this._state.sidebar = SidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;