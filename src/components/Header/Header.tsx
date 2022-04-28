import logo from "../../images/logo.png";
import React from "react";
import s from "./Header.module.css"


const Header = ()=>{
  return(
    <header className={s.header}>
      <img src={logo} width={100}
           alt="logo"/>
    </header>
  )
}
export default Header