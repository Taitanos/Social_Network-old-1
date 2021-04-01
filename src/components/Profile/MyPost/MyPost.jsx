import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 3, retweet: 0, comments: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 12, retweet: 3, comments: 0},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} retweet={postData[0].retweet} comments={postData[0].comments}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount} retweet={postData[1].retweet} comments={postData[1].comments}/>
            </div>
        </div>)

}

export default MyPost;
