import React from 'react';
import './botMessage.css'
import bot from '../assets/bot.png'

const BotMessage = () => {
    return (
        <div className='main-container'>
            <div className="second-container">
                <img src={bot} alt="Medica" className="Bot" />
                <div className="container">
                    <p>
                        Meet Medica. Your medical prescription assistant.
                        He’s here to help so you must not stand on the long
                        waiting lines in hospitals hoping to see a doctor
                    </p>
                    <button className="buttonStart">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BotMessage;