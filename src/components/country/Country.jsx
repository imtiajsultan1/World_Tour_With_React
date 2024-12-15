import { useEffect, useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    console.log(country)
    const {name,flags,population,area,cca3} = country;

    const [visited , setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple':'black'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>

            <h5><small>Code : {cca3}</small></h5>

            <button onClick={()=>handleVisitedCountry(country)}>Add to Visited List</button>
            <br />
            <br />
            <button onClick={handleVisited}>Visited</button>
            { visited && 'Happy happy happy'}
        </div>
    );
};

export default Country;