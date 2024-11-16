import React from 'react';
import './allergie.css'
import remove from "../../assets/remove.png"

const Allergie = ({allergie}) => {
    return (
        <div className='allergie'>
            <input type="text" value={allergie}/>
            <img src={remove} alt="remove" />
        </div>
    );
};

export default Allergie;