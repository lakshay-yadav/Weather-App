import React,{useState} from 'react'
import Result from './Result.tsx';
import './home.css'

export default function Home() {
    const [location,setLocation] = useState("")
    // console.log(location)
    const [result,setResult] = useState(false);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=BV2NFAHT4AULQCEKNLEBF6RZG&contentType=json`
    const [weatherData,setWeatherData] = useState({})

    const resetFunc = ()=>{
        setLocation("")
        setResult(false)

    }

    const handleChange = (e)=>{
        e.preventDefault()
        let newLocation = e.target.value
        setLocation(newLocation)
        // console.log(location)
    }
    const clickFunc = async ()=>{
        console.log("clicked")
        // console.log(process.env.URL)
        let response = await fetch(URL,{
            "method":"GET",
            headers:{
                Accept: "application/json"
            }
        })

        let data = await response.json();

        setWeatherData(data);   
        setResult(true)

        // console.log(data)

    }

  return (
    <>
        <div>
            <div className="search-box">
            <h1>Welcome to Weather App</h1>
            <br />
            <div className="search-area">
            <input type="text" value={location} onChange={(e)=>{handleChange(e)}}/>
            <button onClick={clickFunc}>Search</button>
            <button onClick={resetFunc}>Reset</button>
            </div>
            </div>
            <br />
            <div className="result">
            { result? <Result data = {weatherData}/>:''}
            </div>
        </div>
    </>
  )
}
