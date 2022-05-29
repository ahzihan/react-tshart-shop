import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse, ornament] = useContext(RingContext);
  return (
    <div>
      <h3>Special</h3>
      <p>Gift: {ornament}</p>
      <p>House: {house}</p>
      <button onClick={() => setHouse(house + 1)}>Buy A House</button>
    </div>
  );
};

export default Special;
