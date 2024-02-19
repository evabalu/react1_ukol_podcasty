import React from "react";
import './episode.css';

export const Episode = ({ num, title, guest}) => {
    return ( 
        <>
            <li className="episode">
                    <p className="episode__num">{num}</p> 
                    <div className="episode__body">
                        <p className="episode__title">{title}</p>
                        <p className="episode__guest">Host: {guest}</p>
                    </div>
            </li>        
        </>
    );
};