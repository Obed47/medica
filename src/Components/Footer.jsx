import React from 'react';
import media1 from '../assets/media1.png'
import media2 from '../assets/media2.png'
import media3 from '../assets/media3.png'
import media4 from '../assets/media4.png'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="message">
                <div>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others<br/>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others
                </div>
                <div>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others<br/>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others
                </div>
                <div>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others<br/>
                    Fill in info about your symtoms,<br/>
                    heriditary illnesses and others
                </div>
            </div>
            <div className="socials-medias">
                <div className="images">
                    <img src={media1} alt="social-media" />
                    <img src={media2} alt="social-media" />
                    <img src={media3} alt="social-media" />
                    <img src={media4} alt="social-media" />
                </div>
                <p className="copyright">
                    medica@copyright2024
                </p>
            </div>
        </div>
    );
};

export default Footer;