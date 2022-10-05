import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts= useLoaderData();
    return (
        <div>
            {
                posts.map(post => <Post 
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;