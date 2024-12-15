import React, { useState } from "react";
import "./consultationHistory.css";
import PastConsultation from "./pastConsultation";

const ConsultationHistory = () => {
  const [history, setHistory] = useState([
    { illnessName: "Headache", proposedRemedy: "paracetamol", id: 1 },
    { illnessName: "Body pain", proposedRemedy: "rest and sport", id: 2 },
    { illnessName: "Eye pain", proposedRemedy: "eye drops", id: 3 },
    { illnessName: "Eye pain", proposedRemedy: "eye drops", id: 3 },
    { illnessName: "Eye pain", proposedRemedy: "eye drops", id: 3 },
    { illnessName: "Eye pain", proposedRemedy: "eye drops", id: 3 },
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
          <div>
            <PastConsultation
              key={item.id}
              illness={item.illnessName}
              remedy={item.proposedRemedy}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ConsultationHistory;
