import React from 'react';
const CountryCard = ({ curElem }) => {
  return (
    <li className="country-card">
      <img
        src={curElem.flag}
        alt={`Flag of ${curElem.name}`}
        className="country-flag"
      />
      <div className="country-details">
        <h2 className="country-name">{curElem.name}</h2>
        <p><strong>Population:</strong> {curElem.population.toLocaleString()}</p>
        <p><strong>Capital:</strong> {curElem.capital}</p>
        <p><strong>Region:</strong> {curElem.region}</p>
      </div>
    </li>
  );
};

export default CountryCard;