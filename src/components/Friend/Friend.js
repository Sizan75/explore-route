import React from 'react';
import './Friend.css';
const Friend = ({friend}) => {
    const {name , username, email, address} =friend
    return (
        <div className='card'>
           <h3>Name: {name}</h3> 
           <p>UserName:{username}</p>
           <p>Email:{email}</p>
           <p><small>City: {address.city}</small></p>
        </div>
    );
};

export default Friend;