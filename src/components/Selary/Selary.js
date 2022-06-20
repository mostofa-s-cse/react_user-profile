import React from 'react';

const Selary = (props) => {
    const selary = props.selary;

    // let totalSelary = 0;
    // for (let i = 0; i < selary.length; i++) {
    //     const user = selary[i];
    //     totalSelary = totalSelary + user.selary;
        
    // }
    const totalSelary = selary.reduce((sum,user) => sum + user.selary,0)
    return (
        <div>
            <h2>User Added : {selary.length} </h2>
            <h2>Selary Added : $ {totalSelary} </h2>
        </div>
    );
};

export default Selary;