import React from 'react'

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

 if(isNaN(element)=== false){

  setCity("")
  
 }
 })
    }
   
   
   
   
   return (
        <div>
     <button onClick={apiCall} type='submit'>{label}</button>    
        </div>
    )
}

export default SearchButton