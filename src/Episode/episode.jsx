import React from "react";

export const Episode = ({ num, title, guest}) => {
    return ( 
    <>
        <ul className="episode__box">
        <li className="episode">
            <div className="episode__num">{num}</div> 
            
        </li>
        <li className="episode__body">
            <div className="episode__title">{title}</div>
            <div className="episode__guest">Host: {guest}</div>
        </li>
        </ul>
    </>
    );
};