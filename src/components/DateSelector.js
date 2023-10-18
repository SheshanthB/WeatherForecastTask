import React, {useState} from "react"
import ReactDatePicker from "react-datepicker/dist/react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { weatherData } from "./WeatherData"
import Forecast from "./Forecast"

export default function DateSelector(){
    const [startDate, setStartDate]=useState(null)
    const [endDate, setEndDate]=useState(null)
    const [weatherForecast, setWeatherForecast]=useState({})
    const [selectedDays, setSelectedDays]=useState([])
    const [days, setDays]=useState([])

    const handleStartDate=(date)=>{
        setStartDate(date)
        setEndDate(null)
        setSelectedDays([])
    }
    const handleEndDate=(date)=>{
        setEndDate(date)
        const start=new Date(startDate)
        const end= new Date(endDate)
        setDays([])

        while(start<=end){
            days.push(start.toLocaleDateString("en-US",{weekday: "long"}))
            start.setDate(start.getDate()+1)
        }
        setSelectedDays(days)
        
    }
    const loadWeatherData=()=>{
        
        setWeatherForecast(weatherData)
    }

    return (
        <div>
            <span className="date-label">
            <label className="date-label">From</label>
            <ReactDatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleStartDate} maxDate={endDate ? new Date(endDate) : null} />
            <label className="date-label">To</label>
            <ReactDatePicker selected={endDate} dateFormat="dd/MM/yyyy" onChange={handleEndDate} minDate={startDate ? new Date(startDate) : null} 
            maxDate={startDate ? new Date(startDate).getTime()+6*24*60*60*1000 : null} />
            </span>
            <button onClick={loadWeatherData} className="button">Submit</button>
            
            <Forecast selectedDays={selectedDays} weatherForecast={weatherForecast} />
            
            
        </div>
    )
}