import React, { useEffect, useState } from 'react'
import countryData from "../api/countryData.json"
import CountryCard from '../components/CountryCard'

const Country = () => {
  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countryData.countries.map((curElem,index) => (
         <CountryCard curElem={curElem} key={index}/>
        ))}
      </ul>
    </section>
  )
}

export default Country
