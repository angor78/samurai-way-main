import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../redux/state";


export const DialogItem = (props: DialogType) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path} style={isActive => ({
        color: isActive ? "orangered" : "orange",
        textDecoration: "none"
      })}>
        <div className={s.item}>
          <img src={props.avatar}  alt={'ava'}/>
          <span>{props.name}</span>
        </div>
      </NavLink>
    </div>
  )
}