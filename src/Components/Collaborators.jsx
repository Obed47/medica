import React from 'react';
import DrFigure from './DrFigure';
import dr1 from '../assets/dr1.png'
import dr2 from '../assets/dr2.png'
import dr3 from '../assets/dr3.png'
import dr4 from '../assets/dr4.png'


const Collaborators = () => {
    return (
        <div className='container'>
            <h1>In Collaboration With Highly Trained Medical personnel</h1>
            <div className="figures">
                <DrFigure 
                    background={dr1}
                    name={"Dr Kalera H"}
                    profession={"Ophtamologist"}
                />

            </div>        
        </div>
    );
};

export default Collaborators;