import React from 'react';
import Card from './Card.tsx';
import "./results.css"

export default function Result({data}) {
    console.log(data)
  return (
    <div>
        <h2>Weather Information for {data.address.toUpperCase()} :</h2>
        <p>Description: {data.description}</p>
        <div>
            <h3>Weather Forecast</h3>
                <div className="result">
               { data.days.map((day)=> <Card data = {day}/>)}
                </div>
        </div>
    </div>
  )
}
