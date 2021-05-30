import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    const {name, capital, population, area, region} = country;
    // console.log(country);
    return (
        <div>
            
            <h2>Name : {name}</h2>
            <h4> Capital : {capital}</h4>
            <h5>Population: {population}</h5>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default CountryDetail;