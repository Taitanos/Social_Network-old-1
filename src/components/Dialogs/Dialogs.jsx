import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1"> Nikolay </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"> Valera </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"> Leha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4"> Tatiana </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5"> Sergey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6"> Elena </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Fine</div>
            </div>
        </div>


    )
}

export default Dialogs;