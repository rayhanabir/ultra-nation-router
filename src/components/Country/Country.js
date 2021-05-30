import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital} = props.country;
    const countryStyle  ={
        border: '1px solid purple',
        margin: '30px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style ={countryStyle}>
            
            <h2>Name: {name}</h2>
            <h4>Capital : {capital}</h4>
            <Link to ={`/country/${name}`}>
                <button>Show detail</button>
            </Link>
        </div>
    );
};

export default Country;