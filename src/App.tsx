import React from "react";
import {ChakraProvider, CircularProgress} from '@chakra-ui/react'
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Login} from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {MainImage} from "./components/MainImage/MainImage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {inititializeApp} from "./redux/app-reducer";


class App extends React.Component<AppClassContainerType> {
  componentDidMount() {
    this.props.inititializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return (
        <ChakraProvider>
          <CircularProgress isIndeterminate color='teal.300' size='220px'/>
        </ChakraProvider>
      )
    }
    if(!this.props.isAuth){
      return <Navigate to={'/login'}/>
    }
    return (
      <ChakraProvider>
        <HeaderContainer/>
        <div className="app-wrap">
          <div className="app-wrap-content">
            <Routes>
              <Route path="/samurai-way-main/" element={<MainImage/>}/>
              <Route path={"/dialogs"}
                     element={<DialogsContainer/>}/>
              <Route path={"/users"}
                     element={<UsersContainer/>}/>
              <Route path={'/profile/:userId'}
                     element={<ProfileContainer/>}/>
              <Route path={"/music"} element={<Music/>}/>
              <Route path={"/news"} element={<News/>}/>
              <Route path={"/settings"} element={<Settings/>}/>
              <Route path={"/login"} element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </ChakraProvider>
    )
  }
}

type MapStatePropsType = {
  initialized: boolean
  isAuth:boolean
}
type MapDispatchPropsType = {
  inititializeApp: () => void
}
export type AppClassContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {initialized: state.app.initialized, isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {inititializeApp})(App)
