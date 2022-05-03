import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Katya</div>
        <div className={s.dialog}>Frosia</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>"How are you?"</div>
        <div className={s.message}>"Fine!"</div>
        <div className={s.message}>"Yo"</div>
      </div>

    </div>
  )
}
export default Dialogs