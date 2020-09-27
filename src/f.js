import React from 'react';
import logo from './logo.svg';
import './App.css';

const Example = () =>{
    return(
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello World</p>
      <a className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="1"
      >
        Learn React
      </a>
    </header>
    )
  }

  export default Example;