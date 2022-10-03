import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3 className="h-tag">
        Available are total Countries:{countries.length}{" "}
      </h3>
      <div className="countries-container ">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

{
  /* <div className="countries-container">
<h3>Available countreis:{countries.length} </h3>
{countries.map((country) => (
  <Country country={country}></Country>
))} */
}
// </div>
{
  /* <Country

name={country.name.common}
languages={
  country.languages
    ? country.languages.bul
    : "no languages information"
}
region={country.region}
></Country> */
}

export default Countries;
