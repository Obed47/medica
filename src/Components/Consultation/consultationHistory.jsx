import React, { useContext, useEffect, useState } from "react";
import "./consultationHistory.css";
import PastConsultation from "./pastConsultation";
import axios from "axios";
import { userIdentifier } from "../../App";
const ConsultationHistory = () => {
  const [consultation, setConsultation] = useState([]);
  const userId = useContext(userIdentifier);
  const FetchData = () => {
    axios
      .get("http://37.60.244.227:2000/api/consultations")
      .then((response) => {
        setConsultation(response.data);
        console.log("success fetching ", consultation);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="consultationHistory">
      <h3>Consultation History</h3>
      <h5>
        History about past consultations in
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
