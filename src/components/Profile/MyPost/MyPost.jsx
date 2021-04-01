import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 3, retweet: 0, comments: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 12, retweet: 3, comments: 0},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} retweet={p.retweet}
                                             comments={p.comments}/>)

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
                {postsElements}
            </div>
        </div>)

}

export default MyPost;
