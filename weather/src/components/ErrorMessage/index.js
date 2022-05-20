import React, { useContext } from 'react'
import { WeatherContext } from '../../App'
import style from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    
   
   /*  error caught when the locatation Api throws an error because it can't search for what the user inputted */
    let {error ,city,setCity ,setError , setDailyWeather} = useContext(WeatherContext)
    
   if(error && !city){
setError("")
setCity("")
setDailyWeather("")
    return
   }


    return (
       <div className={style.errorMessage}>
        {error?<p> Search {error}, sorry no match for {city} </p>: null}
        </div>
    )
}

export default ErrorMessage