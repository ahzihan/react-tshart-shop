import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
const Grandpa = () => {
    const ornament = 'Dimond Ring';
    const [ house, setHouse ] = useState( 1 );
    const handleBuyAhouse = () => {
        const newHouseCount = house + 1;
        setHouse( newHouseCount );
    };
    return (
        <div className='grandpa'>
            <h3>Grand Father</h3>
            <button onClick={handleBuyAhouse}>Buy A House</button>
            <p>House: {house}</p>
            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;