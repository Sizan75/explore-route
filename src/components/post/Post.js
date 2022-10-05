import React from 'react';

const Post = ({post}) => {
    const {title,body} = post
    return (
        <div>
           <h2>Title: {title}</h2>
           <p>{body}</p>
           <button>Show Details</button> 
        </div>
    );
};

export default Post;