import { useState } from 'react';
import './country.css'
const Country = ({country, handleAsMark, handleFlag}) => {
    // console.log(country);
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited)
    }

    return (
        // conditional styling 
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'green' : 'purple'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code:{cca3} </small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button> 
            <br />
            <button onClick={()=> handleAsMark(country)}>Mark as Readed</button>
            <button onClick={()=> handleFlag(country.flags.png)}>Visited Flag</button>
            <br />
            {visited ? 'I have visited this country' : 'Don\'t visited yet'}
        </div>
    );
};

export default Country;