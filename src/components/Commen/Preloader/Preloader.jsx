import React from 'react';
import style from "./Preloader.module.css"
import preloader from "../../../assets/images/Infinity-2s-200px.svg"

let Preloader = () => {

    return (
        <div className={style.preloaderWrapper}>
            <img src={preloader} />
        </div>
    )

}


export default Preloader