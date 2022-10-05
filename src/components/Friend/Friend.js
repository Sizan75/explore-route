import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = ({friend}) => {
    const {name , username, email,id, address} =friend
    return (
        <div className='card'>
           <h3>Name: {name}</h3> 
           <p>UserName:{username}</p>
           <p>Email:<Link to={`/friend/${id}`}>{email}</Link></p>
           <p><small>City: {address.city}</small></p>
        </div>
    );
};

export default Friend;