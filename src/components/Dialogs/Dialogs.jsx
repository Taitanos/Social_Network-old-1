import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id


    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Nikolay'},
        {id: 2, name: 'Leha'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Tatiana'},
        {id: 6, name: 'Elena'},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
                <Message message={messageData[5].message} id={messageData[5].id}/>
            </div>
        </div>


    )
}

export default Dialogs;