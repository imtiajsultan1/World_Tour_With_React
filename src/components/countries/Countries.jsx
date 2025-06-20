import { useEffect } from 'react';
import { useState } from 'react'
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(response => response.json())
    .then(data => setCountries(data))
  },[])
    
    const handleVisitedCountry = country =>{
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country = {country} 
                        handleVisitedCountry = {handleVisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;