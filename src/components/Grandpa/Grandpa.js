import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

/**
 * context api
 * 1.call createContext with a default value
 * 2.set a variable of the context with uppercase
 * 3.Make sure you export the context to use it in other places
 * 4.wrap you child content using MyContext.Provider
 * 5.provide a value
 * 6.to consume the context from child context
 * 7.useContext hook and you will need to pass the contextName
 */
export const RingContext = createContext("ring");
const Grandpa = () => {
  const ornament = "Dimond Ring";
  const [house, setHouse] = useState(1);
  const handleBuyAhouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse, ornament]}>
      <div className="grandpa">
        <h3>Grand Father</h3>
        <button onClick={handleBuyAhouse}>Buy A House</button>
        <p>House: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
