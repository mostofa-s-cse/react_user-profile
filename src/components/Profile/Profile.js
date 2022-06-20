import React, { useState } from 'react';
import './Profile.css'

const Profile = (props) => {
    const {img,name,email,phone,selary} = props.user;
    const handleAddUser = props.handleAddUser;
    const [mobile,setMobile] = useState('');
    const showPhone = () => setMobile(phone); 
    const addMember = props.addMember;

    return (
        <div className="profile-container">
            <div>
                <img src= {img} alt="" />
            </div>
            <div className="user-info">
                <h4>Name : {name}</h4>
                <p>Email : {email} </p>
                <p>Phone : {mobile}</p>
                <p>Selary : $ {selary}</p>
                <button className={`btn btn-info mr-2`} onClick={showPhone}>Show Number</button>
                <button className={`btn btn-success mr-2`} onClick={() => addMember(name)}>Add Team</button>
                <button className={`btn btn-warning`} onClick={() => handleAddUser(props.user)}>Add Selary</button>
            </div>
        </div>
    );
};

export default Profile;