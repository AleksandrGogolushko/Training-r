import React from 'react';
import style from "./Dialog.module.css"
import DialogsPanel from './DialogsPanel/DialogsPanel';

const Dialog = (props) => {
  return (
    <div className={style.componentsContent}>
      <p className={style.title}>Dialogs</p>
      <DialogsPanel />
    </div>
  )
}

export default Dialog