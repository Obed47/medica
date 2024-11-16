import React from 'react';
import "./inherited.css"
import add from '../../assets/add-btn.png'
import Illness from './illness';


const Inherited = () => {
    return (
        <div className='inherited'>
            <h3>Inheritted Illnesses</h3>
            <div className="content">
                <div className="props">
                    {/* <Illness 
                        illness={"Black beans"}
                    />
                    <Illness 
                        illness={"Black beans"}
                    /> */}
                </div>
                <div className="button">
                    <input type="text" placeholder='Type illness'/>
                    <button>
                        <img src={add} alt="add" />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inherited;