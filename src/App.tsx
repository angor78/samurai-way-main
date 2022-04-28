import React from 'react';
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="app-wraper">
      <header className="header">
        <img src={logo} width={100}
             alt="logo"/>
      </header>
      <nav className="nav">
        <div><a href='#'>Profile</a></div>
        <div><a href='#'>Messages</a></div>
        <div><a href='#'>News</a></div>
        <div><a href='#'>Musik</a></div>
        <div><a href='#'>Settings</a></div>
      </nav>
      <div className="content">
        <div>Ava+description</div>
        <div>
          MY POSTS
          <div>new post
          </div>
          <div>1 post</div>
          <div>2 post</div>
        </div>

      </div>
    </div>
  );
}

export default App;
