import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
 
    const handlenavigator = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
           <h2>Title: {title}</h2>
           <p>{body}</p>
           <Link to={`/post/${id}`}><button>Show Details</button></Link> 
            <button onClick={handlenavigator}>Details</button>
        </div>
    );
};

export default Post;