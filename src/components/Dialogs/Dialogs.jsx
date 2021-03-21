import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Nikolay
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Leha
                </div>
                <div className={s.dialog}>
                    Tatiana
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Elena
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