import React, { useState } from "react";
import "./consultationHistory.css";
import PastConsultation from "./pastConsultation";

const ConsultationHistory = () => {
  const [history, setHistory] = useState([
    { illnessName: "headache", proposedRemedy: "paracetamol" },
    { illnessName: "headache", proposedRemedy: "paracetamol" },
    { illnessName: "headache", proposedRemedy: "paracetamol" },
    { illnessName: "headache", proposedRemedy: "paracetamol" },
  ]);
  return (
    <div className="consultationHistory">
      <h3>Consultation History</h3>
      <h5>
        History about past consultation in{" "}
        <span style={{ fontWeight: "bold" }}>read only</span>
      </h5>

      {history.map((item) => {
        return (
          <PastConsultation
            illness={item.illnessName}
            remedy={item.proposedRemedy}
          />
        );
      })}
    </div>
  );
};

export default ConsultationHistory;
