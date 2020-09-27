import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPosts,changeNewTextPosts,changeNewTextMessages,addMessages } from "./redux/state";

 export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPosts={addPosts} updateTextPosts={changeNewTextPosts} updateTextMessages={changeNewTextMessages} addMessages={addMessages}/>, document.getElementById('root'));
}


