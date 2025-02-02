import countryApi from "../api/countryApi.json";
import React from 'react'

const About = () => {
  return (
  <section className="section-about container">
    <h2 className="container-title">
      Here are the interesting Facts
      <br />
      we'r proud of
    </h2>

    <div className="gradient-cards">
     {countryApi.map((country)=>{
      return(
        <div key={country.id} className="card">
        <div className="container-card bg-blue-box">
          <p className="card-title">
            {country.country}
          </p>
          <p>
            <span className='card-description'>Capital: </span>
            {country.capital}
          </p>
          <p>
            <span className='card-description'>Population: </span>
            {country.population}
          </p>
          <p>
            <span className='card-description'>Interesting Fact: </span>
           {country.interestingFact}
          </p>
           </div>
        </div>
      )
     })
    }
      </div>
  </section>
  )
}

export default About
