import React from 'react'
import './card.css'

export default function Card({data}) {
  return (
    <div className='container'> 
      <div><p>Date: {data.datetime} </p></div>
     
      <p> Max Temp: {data.tempmax} </p>
      <p> Min Temp : {data.tempmin} </p>
      <p> Temp : {data.temp} </p>
      
      <p> Condtions: {data.conditions} </p> 
      <p> Feels Like : {data.feelslike} </p>
      <p> Description : {data.description} </p>
      
    </div>
  )
}
