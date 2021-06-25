import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [cities, setCities] = useState([])
  const [mancAirQuality, setMancAirQuality] = useState([])

  const BASE_URL = 'https://api.openaq.org/v1/cities?country=GB'
  const ManchesterAPI = 'https://api.openaq.org/v1/measurements?country=GB&city=Manchester'

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        
        //console.log(data.results)
        
      
        setCities(data.results)
      })
      
  }, [])

  useEffect(() => {
    fetch(ManchesterAPI)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)

        setMancAirQuality(data.results)
      })
  }, [])

 
  const handleChange = () => {
           //I should have made this a component instead along with the base URL API 
    mancAirQuality.map((data) => {
      return <ul key={data.value}>
            <li> <label>City:</label> {data.city} </li>
            <li> <label>Parameter:</label> {data.parameter} </li>
            <li> <label>Country:</label> {data.country} </li>
            <li> <label>Location:</label> {data.location} </li>
          </ul>
    })
    setCities(mancAirQuality)
  }


  return (
    <div >
      <h1>Hello World </h1>

      <label>Filter</label> <select onChange={handleChange}>
        <option>Cities Select</option>
        <option>Manchester Air Quality</option>
      </select>

      {cities.map((data) => {
        
        return <ul key={data.name}>
          <li> <label>City:</label> {data.name} </li>
          <li> <label>Count:</label> {data.count} </li>
          <li> <label>Country:</label> {data.country} </li>
          <li> <label>Locations:</label> {data.locations} </li>
        </ul>
      })}

    </div>
  );
}

export default App;
