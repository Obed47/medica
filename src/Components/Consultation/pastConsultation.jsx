import React from "react";
import "./pastConsultation.css";
import deleteIcon from "../../assets/delete.svg";
const PastConsultation = (props) => {
  const currentDate = new Date();
  return (
    <div className="pastConsultation">
      <table>
        <thead>
          <td style={{ color: "#7878F3" }}>Illness: </td>
          <td style={{ color: "#7878F3" }}>Proposed Medication</td>
          <td> </td>
        </thead>
        <tr>
          <td className="text-red-600 ">{props.illness}</td>
          <td className="text-red-600">{props.remedy}</td>
          <td
            className="text-green-500 font-bold"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {props.Date}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PastConsultation;
