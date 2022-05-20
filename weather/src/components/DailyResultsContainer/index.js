import React from 'react'
import style from "./DailyResults.module.css"
import { useContext , useState ,useEffect } from 'react'
import { WeatherContext } from '../../App'
import DailyForecast from '../DailyForeCast'
const DailyResults = () => {
    

    let {result , dailyWeather} = useContext(WeatherContext) 
    const [fourDays, setFourDays] = useState([])
    let[date ,setDate] = useState()
    const [weekday, ] =useState(["Sunday" ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ,"Monday","Tuesday","Wednesday", "Thursday" ,"Friday"])
   

useEffect(()=>{
 setDate(new Date().getUTCDay())
   
 
 if(dailyWeather){
setFourDays(dailyWeather.splice(0,5))
                }
                 
    },[result])




 
     
    

    return (
        <div className={style.wrapper}>
        {fourDays.map((day ,i=0)=>{
  
     return  <DailyForecast  key={i} picture={day.weather[0].icon} day={weekday[date+i] } temp={day.temp.day} low={day.temp.min} />   
        })}
    
    
        </div>
    )
}

export default DailyResults