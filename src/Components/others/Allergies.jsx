import React from 'react';
import "./allergies.css"
import add from '../../assets/add-btn.png'
import Allergie from './allergie'; 

const Allergies = () => {
    return (
        <div className='allergies'>
            <h3>Allergies</h3>
            <div className="content">
                <div className="props">
                    {/* <Allergie 
                        allergie={"Black beans"}
                    />
                    <Allergie 
                        allergie={"Black beans"}
                    /> */}
                </div>
                <div className="button">
                    <input type="text" placeholder='Type Alergy'/>
                    <button>
                        <img src={add} alt="add" />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Allergies;