import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={"https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg"} alt={"avatars"}/>
            { props.message }
            <div>
                <span>Like</span>
                <span>Retweet</span>
                <span>Comments</span>
            </div>
        </div>
    )
}
export default Post;
