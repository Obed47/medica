import React from 'react';
import "./illness.css"
import remove from "../../assets/remove.png"

const Illness = ({illness}) => {
    return (
        <div className='illness'>
            <input type="text" value={illness}/>
            <img src={remove} alt="remove" />
        </div>
    );
};

export default Illness;