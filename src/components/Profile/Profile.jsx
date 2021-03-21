import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'
                    alt={"pictures"}/>
            </div>
            <div>
                ava
            </div>
            <div>
                <MyPost/>
            </div>
        </div>
    )
}

export default Profile;
