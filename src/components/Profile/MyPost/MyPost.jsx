import React from 'react';
import s from './MyPost.module.css';
import Post from "../Post/Post";

const MyPost = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea cols="30" rows="10"></textarea>
                <button> Add post</button>
            </div>
            <Post/>
        </div>)

}

export default MyPost;
