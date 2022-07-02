const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
_state: {
    profilePage: {   
         posts: [
        { id: 1, message: "Hi!", likesCount: 22 },
        { id: 2, message: "Hello!", likesCount: 12 },
        { id: 3, message: "Gay!", likesCount: 45 },
        { id: 4, message: "Privet!", likesCount: 14 },
],
 newPostText: 'raretet',},
    
    
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
          ], newMessageText: 'hello!',},
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
// let updateNewMessagesText = (newText) => {
//     state.messagesPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default store;
window.store = store;