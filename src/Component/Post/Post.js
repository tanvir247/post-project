import React from 'react';
import './Post.css'

const Post = (props) => {
    const {userId,title,body,id}= props.postDetail;
    
    return (
        <div className="post">
            <h2>Posted By :{userId}</h2>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <a href={`/singlePost/${id}`}>
            <button>See Full Post</button>
            </a>
        </div>
    );
};

export default Post;