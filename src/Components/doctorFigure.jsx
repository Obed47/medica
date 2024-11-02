import React from 'react';
import './doctorFigure.css'

const DoctorFigure = ({background, name, post}) => {

    const style = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(117, 104, 104, 0.342),rgba(24, 24, 24, 0.658)),url(${background})
                        `
    }

    return (
        <div className='doc-container' style={style}>
            <div className="infos">
                <p className="name">
                    {name}
                </p>
                <p className="profession">
                    {post}
                </p>
            </div>
        </div>
    );
};

export default DoctorFigure;