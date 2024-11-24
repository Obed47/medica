import React from 'react'
import Options from './options'
import Robot from './robot'
import ConsultationHistory from './consultationHistory'
export default function ConsultationPage() {
  return (
    <div className='flex items-start justify-evenly' 
    style={{
          backgroundColor: '#E5E4E4',
          height: "100vh",
          overflow: 'hidden'
    }}> 
        <Options/>
        <ConsultationHistory/>
    </div>
  )
}
