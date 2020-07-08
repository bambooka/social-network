import style from "../styles/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink to={path}>{props.author}</NavLink>
        </div>
    )
};

export default Dialog;