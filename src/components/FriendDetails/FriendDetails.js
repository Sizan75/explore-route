import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails= useLoaderData();
    
    return (
        <div>
            <h4>Name: {friendDetails.name}</h4>
            <h4>Phone: {friendDetails.phone}</h4>
        </div>
    );
};

export default FriendDetails;