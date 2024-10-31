import React from 'react';
import './botMessage.css'
import bot from '../assets/bot.png'

const BotMessage = () => {
    return (
        <div className='container  my-4 w-100 main-container'>
            <img src={bot} alt="Medica Bot"/>
            <div className="container">
                <p>
                    Meet Medica. Your medical prescription assistant.
                    He’s here to help so you must not stand on the long
                    waiting lines in hospitals hoping to see a doctor
                </p>
                <button className="buttonStart">Get Started</button>
            </div>
        </div>
    );
};

export default BotMessage;