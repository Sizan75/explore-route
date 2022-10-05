import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body,userId} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <p><small>Author ID:{userId}</small></p>
            <p><small>Post ID:{id}</small></p>
            <button onClick={handleNavigate}>Author Info</button>
        </div>
    );
};

export default PostDetails;