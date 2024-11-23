import React from 'react';
import "./getSymptoms.css"
import BotImage from './BotImage';
import Allergies from './Allergies';
import Inherited from './Inherited';
import validate from '../../assets/validate.png'


const GetSymptoms = () => {
    return (
        <div className='getSymptoms'>
            <BotImage/>
            <div className="get">
                <h1>
                    We are happy to have you with us
                </h1>
                <h3>
                    We will need some vital information about your health
                </h3>
                <Allergies/>
                <Inherited/>
                <button type="submit" className='submit'>
                    <img src={validate} alt="proceed"/>
                    <span>Proceed</span>
                </button>
            </div>
        </div>
    );
};

export default GetSymptoms;