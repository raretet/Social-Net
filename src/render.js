import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPosts, updateNewPostText } from './Redux/state';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
      root.render(
        <React.StrictMode>
          <BrowserRouter>
          <App state={state} addPosts={addPosts} updateNewPostText={updateNewPostText}/>
          </BrowserRouter>
        </React.StrictMode>
  );
  }  


export {rerenderEntireTree};