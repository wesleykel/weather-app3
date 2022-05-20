import React from 'react'
import { WeatherContext } from '../../App'
import style from "./mainResult.module.css"
import  { useEffect, useState, useContext } from 'react'
import ResultCard from '../MainResultCard/mainResultsCard'

const ResultsContainer = () => {
    const [temp, setTemp] =useState({})
    const [searchedCity, setSCity]=useState("")
    const{city ,setCity,result}=useContext(WeatherContext) 
    const [upperCaseCity , setUpperCaseCity] = useState("")
 console.log(city)   

/*takes  the results from the api call, checks if there is data creates an object in setTemp that I can use to populate the result card */
useEffect(()=>{

if(result.current){
   
    setSCity(city)
setTemp({
    
    temp:Math.floor(result.current.temp),
    feels:Math.floor(result.current.feels_like),
    description:result.current.weather[0].description,
    icon:result.current.weather[0].icon
})   

 setCity("")
/* takes  the search term and make the first letter uppercase*/ 
 if(city){
    const upperCaseCity = city.split("")
    
    setUpperCaseCity(upperCaseCity[0].toUpperCase()+city.substring(1))
    
    } 

}

},[result])
    

    

    return (
        <div className={style.wrapper}>
           <h2 >Search results for:{upperCaseCity} </h2> 
           <ResultCard pic={temp.icon} description={temp.description} feelsLike={temp.feels} temperate={temp.temp}/>
        </div>
    )
}

export default ResultsContainer