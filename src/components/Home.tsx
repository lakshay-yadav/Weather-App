import React,{useState,createContext, useRef} from 'react'
import Result from './Result.tsx';
import Navbar from './Navbar.tsx';
import './home.css'

export const login = createContext(false)

export default function Home() {
    const varname = useRef(0);
    varname.current = varname.current + 1;
    
    const [location,setLocation] = useState("")
    const [loginInfo,setLoginInfo] = useState(false)
    // console.log(location)
    const [result,setResult] = useState(false);
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=BV2NFAHT4AULQCEKNLEBF6RZG&contentType=json`
    const [weatherData,setWeatherData] = useState({})

    const resetFunc = ()=>{
        setLocation("")
        setResult(false)
        setLoginInfo(false)
    }

    const handleChange = (e)=>{
        e.preventDefault()
        let newLocation = e.target.value
        setLocation(newLocation)
        // console.log(location)
        setLoginInfo(true)
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
        <login.Provider value={loginInfo}>
            <Navbar/>
        </login.Provider>
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
