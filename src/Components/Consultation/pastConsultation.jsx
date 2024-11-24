import React from 'react';
import './pastConsultation.css'

const PastConsultation = () => {
    return (
        <div className='pastConsultation'>
            <table>
                <thead>
                    <td>Ilness: </td>
                    <td>Proposed Medication</td>
                    <td> </td>
                </thead>
                <tr>
                    <td>Fever and Headache</td>
                    <td>Fever and Headache</td>
                    <td>11/12/24</td>
                </tr>
            </table>
            <button>Delete Icon</button>
        </div>
    );
};

export default PastConsultation;