import React from 'react'
import style from "./mainResults.module.css"

const ResultCard = ( { temperate , feelsLike, description, pic} ) => {

   
    return (
        <div className={style.wrapper}>
        
        <ul className={style.list}>
        <li id={style.temp}>Temperature: {temperate}°</li>
       <li id={style.feelsLike}>Feels Like: {feelsLike}°</li>  
       <li id={style.description}>{description} </li>  

        </ul>
        <div className={style.imgWrapper}>
       <img src={ `http://openweathermap.org/img/wn/${pic}@2x.png` } alt="weather"/>     
       </div>
        </div>
    )
}

export default ResultCard