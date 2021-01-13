import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'
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
