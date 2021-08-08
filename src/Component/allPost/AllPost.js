import React, {useState, useEffect} from 'react';
import Post from '../Post/Post'

const AllPost = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPost(data))
    }, [])
    console.log(post);

    return (
        <div>
        {
            post.map(post => <Post postDetail={post}></Post> )

        }      
        </div>
    );
};

export default AllPost;