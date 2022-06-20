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
        <div className={`bg-dark text-white p-2 text-center`}>
            <h2>Total Selary : $ {totalSelary} </h2>
        </div>
    );
};

export default Selary;