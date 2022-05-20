import React from 'react'
import style from "./button.module.css"
import { WeatherContext } from '../../App'
import { useContext } from 'react'
const SearchButton = (props) => {
   const {apiCall, label} = props
    
   const {city, setCity} = useContext(WeatherContext)

    if(!city){

        return
    }else{
    let cityArray = city.split("")
   // console.log(cityArray) 
   cityArray.forEach((element)=>{
//Checks if the  user enters a number in th search bar, if they do it clears the search bar
 if(isNaN(element)=== false){

  setCity("")
  
 }
 })
    }
   
   
   
   
   return (
        <div className={style.wrapper}>
     <button onClick={apiCall} type='submit'>{label}</button>    
        </div>
    )
}

export default SearchButton