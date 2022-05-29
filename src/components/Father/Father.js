import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import "./Father.css";

const Father = ({ house }) => {
  return (
    <div>
      <h3>Father</h3>
      <p>House: {house}</p>
      <section className="father">
        <MySelf house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
