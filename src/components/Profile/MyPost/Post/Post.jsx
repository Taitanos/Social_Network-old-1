import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={"https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg"} alt={"avatars"}/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
                <span> Retweet</span> {props.retweet}
                <span> Comments</span> {props.comments}
            </div>
        </div>
    )
}
export default Post;
