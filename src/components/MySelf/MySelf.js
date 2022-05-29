import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h3>My Self</h3>
      <p>House: {house}</p>
      <Special></Special>
    </div>
  );
};

export default MySelf;
