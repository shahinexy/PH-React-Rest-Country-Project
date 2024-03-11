import { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import Country from "./../country/country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // visited country name
  const handleMark = (Country) => {
    console.log("hello");
    const newVisitedCountry = [...visitedCountry, Country];
    setVisitedCountry(newVisitedCountry);
  };
  // visited country flag
  const handleFlag = (flag) => {
    console.log("flag");
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div>
      <h2>Country: {countries.length}</h2>
      {/* add visited country name  */}
      <h2>Visited Country: {visitedCountry.length}</h2>
      <ul>
        {visitedCountry.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
      <div className="flag_contaienr">
        {
            visitedFlag.map((flag, idx) => <img key={idx}  src={flag}></img>)
        }
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleAsMark={handleMark}
            handleFlag={handleFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
