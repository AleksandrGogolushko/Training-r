import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Navigation';
// import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialog/DialogsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Nav /> 
        <div className="content">
          <Route path="/Dialog" render={() => <DialogsContainer/>} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/Settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
