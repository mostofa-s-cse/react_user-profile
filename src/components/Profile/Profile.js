import React from 'react';
import './Profile.css'

const Profile = (props) => {
    const {img,name,email,phone,selary} = props.user;
    const handleAddUser = props.handleAddUser;
    const btnStyle = {
        width:'150px',
        height:'25px',
        borderRadius: '4px',
        backgroundColor: 'gold',
        cursor: 'pointer',
        marginBottom : '20px'
    }
    return (
        <div className="profile-container">
            <img src= {img} alt="" />
            <h3>User Name : {name}</h3>
            <p>Phone : {phone}</p>
            <p>Email : {email} </p>
            <p>Selary : $ {selary}</p>
            <button style={btnStyle} onClick={() => handleAddUser(props.user)}>Add User</button>
            <hr />
        </div>
    );
};

export default Profile;