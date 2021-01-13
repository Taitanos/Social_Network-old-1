import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' alt={"pictures"}/>
        </div>
        <div>
            ava
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;
