import React,{useEffect,useState} from 'react';
import './comment.css'

const Comment = (props) => {
    const {name,email,body}= props.commentDetail;
    let imgNumber = Math.floor(Math.random() * 100) + 1;
    const [img, setImg] = useState([])

    
    return (
        <div className="comment">
                <img src={`https://randomuser.me/api/portraits/thumb/men/${imgNumber}.jpg`}/>
                <h4>Name: {name}</h4>
                <h5>E-Mail : {email}</h5>
                <p><span className="bold"> His/Her Comment Here :</span> {body}</p>
        
        </div>
    );
};

export default Comment;