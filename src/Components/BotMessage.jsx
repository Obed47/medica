import React from 'react';
import './botMessage.css'
import bot from '../assets/bot.png'

const BotMessage = () => {
    return (
        <div className='container w-100 main-container'>
            <div className="row gy-4">
                <div className="col-12 content">
                    <img src={bot} alt="Medica" className="Bot col-4 col-md-6 w-md-50 w-sm-50" />
                    <div className="container w-100 pt-3 w-md-100 w-sm-100 col-8 col-md-6 col-sm-6">
                        <p>
                            Meet Medica. Your medical prescription assistant.
                            He’s here to help so you must not stand on the long
                            waiting lines in hospitals hoping to see a doctor
                        </p>
                        <button className="buttonStart">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotMessage;