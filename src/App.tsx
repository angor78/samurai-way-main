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
import {StoreType} from "./redux/store";


type AppPropsType = {
  store: StoreType
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
                     // dialogsPage={props.state.dialogsPage}
                     // dispatch={props.dispatch}
                     // newTextMessage={props.state.dialogsPage.newTextMessage}
                     store={props.store}
                   />}/>
            <Route path={"/profile"}
                   element={<Profile
                     // profilePage={props.state.profilePage}
                     // dispatch={props.dispatch}
                     // newPostText={props.state.profilePage.newTextPost}
                     store={props.store}
                   />}/>

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