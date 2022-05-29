import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const buyHouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <div>
      <h3>Aunty</h3>
      <p>House: {house}</p>
      <button onClick={buyHouse}>Buy House</button>
    </div>
  );
};

export default Aunty;
