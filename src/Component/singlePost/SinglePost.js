import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';
import './singlepost.css';

const SinglePost = () => {
    const {singlePostId}= useParams();
    const [postDetail, setPostDetail] = useState({});

    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/posts/${singlePostId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setPostDetail(data))
    }, [])
    const {body,title}= postDetail;
    const [comment, setComment] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${singlePostId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComment(data))
    }, [])
   // const {userId,title,body}= postDetail;
   const upperCase = {

   }


    
    return (
        <div className="postDetail">
                <h1>This is post detail of id : {singlePostId}</h1>
                <h1 className="upperCase">{title}</h1>
                <p>{body}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4>Comments Below</h4>
                {
                   comment.map(cmnt => <Comment commentDetail={cmnt}></Comment>)
                }
                
        </div> 
    );
};

export default SinglePost;