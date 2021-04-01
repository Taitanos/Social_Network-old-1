import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://aboutandroid.ru/wp-content/uploads/2015/06/%D0%9C%D0%BE%D1%80%D0%B5-7.jpg'
                    alt={"pictures"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
