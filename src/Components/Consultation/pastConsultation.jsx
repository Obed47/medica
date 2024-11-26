import React from "react";
import "./pastConsultation.css";

const PastConsultation = (props) => {
  const currentDate = new Date();
  return (
    <div className="pastConsultation">
      <table>
        <thead>
          <td>Ilness: </td>
          <td>Proposed Medication</td>
          <td> </td>
        </thead>
        <tr>
          <td>{props.illness}</td>
          <td>{props.remedy}</td>
          <td style={{ display: "flex", flexDirection: "row" }}>
            {currentDate.getDate()} <p>-</p>
            {currentDate.getMonth() + 1} <p>-</p> {currentDate.getFullYear()}
          </td>
        </tr>
      </table>
      <button>Delete Icon</button>
    </div>
  );
};

export default PastConsultation;
