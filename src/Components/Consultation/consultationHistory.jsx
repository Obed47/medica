import React, { useEffect, useState } from "react";
import "./consultationHistory.css";
import PastConsultation from "./pastConsultation";
import axios from "axios";
const ConsultationHistory = () => {
  const [consultation, setConsultation] = useState([]);

  const FetchData = () => {
    axios
      .get("http://192.168.1.101:8001/api/consultations")
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
              date={item.date_consultation}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ConsultationHistory;
