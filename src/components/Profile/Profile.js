import React from 'react';


const Profile = (props) => {
    const {img,name,email,phone} = props.user;
    console.log(props.user)
    const btnStyle = {
        width:'150px',
        height:'25px',
        borderRadius: '4px',
        backgroundColor: 'gold',
        cursor: 'pointer'
    }
    return (
        <div>
            
            <img src= {img} alt="" />
            <h3>User Name : {name}</h3>
            <p>Phone : {phone}</p>
            <p>email : {email} </p>
            <button style={btnStyle}>Add User</button>
            <hr />
          
        </div>
    );
};

export default Profile;