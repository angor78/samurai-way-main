import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item + ' ' + s.linkActive}>
        <NavLink to={"/profile"}>
          Profile
        </NavLink>
      </div>
      <div className={s.item + ' ' + s.linkActive}>
        <NavLink to={"/dialogs"}>
          Messages
        </NavLink>
      </div>
      <div className={s.item + ' ' + s.linkActive}>
        <NavLink to={"/news"}>
          News
        </NavLink>
      </div>
      <div className={s.item + ' ' + s.linkActive}>
        <NavLink to={"/music"}>Musik</NavLink>
      </div>
      <div className={s.item + ' ' + s.linkActive}>
        <NavLink to={"/settings"}>
          Settings
        </NavLink>

      </div>

    </nav>
  )
}
export default Navbar