const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {messagesData: [
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
    ], newMessageText: '',};

const MessagesReducer = ( state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.body};
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {...state, 
            newMessageText: '',
            messagesData: [...state.messagesData,{id: 6, message: body}],
          };
        default: 
        return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: text,
})

export default MessagesReducer;