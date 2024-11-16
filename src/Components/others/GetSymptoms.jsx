import React from 'react';
import "./getSymptoms.css"
import BotImage from './BotImage';
import Allergies from './Allergies';
import Inherited from './Inherited';


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
            </div>
        </div>
    );
};

export default GetSymptoms;