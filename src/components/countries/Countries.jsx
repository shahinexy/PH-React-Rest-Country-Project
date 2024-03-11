import { useEffect } from "react";
import { useState } from "react";
import Country from './../country/country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    const handleMark = (Country)=>{
        console.log('hello');
        const newVisitedCountry = [...visitedCountry, Country];
        setVisitedCountry(newVisitedCountry);
    }


    return (
        <div>
            <h2>Country: {countries.length}</h2>
            <h2>Visited Country: {visitedCountry.length}</h2>
            <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleAsMark={handleMark}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;