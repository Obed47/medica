import React, { useContext, useEffect, useState } from "react";
import "./consultationHistory.css";
import PastConsultation from "./pastConsultation";
import axios from "axios"; 
import { userIdentifier } from "../../App";
const ConsultationHistory = () => {
  const [consultation, setConsultation] = useState([]);
  const [idUser, setIdUser] = useState("")
  
  useEffect(()=>{
    setIdUser(parseInt(localStorage.getItem("user").split(',')[0]))
    console.log(typeof(idUser))
  })

  const userId = useContext(userIdentifier);
  console.log(userId);
  const FetchData = () => {
    axios
      //
      .get(`37.60.244.227:2002/api/consultation/${idUser}`)
      .then((res) => {
        setConsultation(res.data);
        console.log(consultation);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  useEffect(() => {
    console.log(consultation);
  }, [consultation]);
  return (
    <div className="consultationHistory">
      <h3>Consultation History</h3>
      <h5>
        History about past consultation in{" "}
        <span style={{ fontWeight: "bold" }}>read only</span>
      </h5>

      {consultation.map((item) => {
        return (
          <div>
            <PastConsultation
              key={item.id}
              illness={item.symptome}
              remedy={item.traitement}
              Date={item.date_consultation}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ConsultationHistory;
