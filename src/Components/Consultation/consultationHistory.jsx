import React from 'react';
import './consultationHistory.css'
import PastConsultation from './pastConsultation';


const ConsultationHistory = () => {
    return (
        <div className='consultationHistory'>
            <h3>Consultation History</h3>
            <h5>History about past consultation in <span>read only</span></h5>
            <PastConsultation/>
            <PastConsultation/>
        </div>
    );
};

export default ConsultationHistory;