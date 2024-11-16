import React from 'react';
import "./botImage.css"
import bot from "../../assets/bot.png"



const BotImage = () => {
    return (
        <div className="bot-image">
            <img src={bot} alt="bot_Medica" />
        </div>
    );
};

export default BotImage;