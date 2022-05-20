import style from "./SearchButton.module.css"
import React from 'react'
//import { SearchContext } from '../..'
//import { useContext } from 'react'
const SearchButton = ({apiCall , label}) => {
    
  /*  const {city, setCity} = useContext(SearchContext)

    if(!city){

        return
    }else{
    let cityArray = city.split("")
    
   cityArray.forEach((element)=>{

 if(isNaN(element)=== false){

  setCity("")
  
 }
 })
    }*/
    
    return (
        <div className={style.wrapper}>
       
        <button onClick={apiCall} type='submit'>{label}</button>  
     
        </div>
    )
}

export default SearchButton