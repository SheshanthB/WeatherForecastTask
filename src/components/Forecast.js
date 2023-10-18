import React from "react";

export default function Forecast(props){
    return (
        <div>
            <h2 className="forecast-header">FORECAST</h2>
            
            <table className="forecast-table">
            {props.selectedDays.map(weekDay=>(
                <tbody key={props.weatherForecast.day}>
                    <tr className={weekDay==="Saturday" || weekDay==="Sunday" ? "red" : "blue"}>{props.weatherForecast[weekDay]?.day}</tr>
                    <tr className="temp">{props.weatherForecast[weekDay]?.temp}</tr>
                    <img src={props.weatherForecast[weekDay]?.image} className="forecast-img" />
                    <tr className="forecast-message">{props.weatherForecast[weekDay]?.message}</tr>
                </tbody>
            ))}
        </table>
        </div>
       
    )
}