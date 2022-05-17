import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StatePropsType} from "./redux/state";


type AppPropsType = {
  state: StatePropsType
  addPost: (textToPost: string) => void
  addMessage: (newTextToMessage: string) => void
  changeTextPost: (postText: string) => void
  changeTextMessage: (textMessage: string) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header/>
        <Navbar/>
        <div className="app-wrap-content">
          <Routes>
            <Route path={"/dialogs"}
                   element={<Dialogs
                     dialogsPage={props.state.dialogsPage}
                     addMessage={props.addMessage}
                     changeTextMessage={props.changeTextMessage}
                     newTextMessage={props.state.dialogsPage.newTextMessage}/>}/>

            <Route path={"/profile"}
                   element={<Profile
                     profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     changeTextPost={props.changeTextPost}
                     newPostText={props.state.profilePage.newTextPost}/>}/>

            <Route path={"/music"} element={<Music/>}/>
            <Route path={"/news"} element={<News/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;