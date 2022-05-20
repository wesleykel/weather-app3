
/*import  { useEffect ,useContext , useState} from 'react'
import style from "./apiCall.module.css"

import { WeatherContext } from '../../App'
import SearchButton from '../SearchButton/searchButton'

const ApiCalls = () => {
    const API_KEY = process.env.REACT_APP_API_KEY   
    const API_LOCATION_URL =  "https://api.openweathermap.org/geo/1.0/direct" 
    const API_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?"
    
    const {city ,setCity,result ,setResult ,setError,error, dailyWeather, setDailyWeather} =useContext(WeatherContext)
    const [longAndLat , setLongAndLat]=useState({})
  

     const getLongAndLat = ()=>{

        fetch(`${API_LOCATION_URL}?q=${city}&limit=5&appid=${API_KEY}`)
        .then(response => response.json())
          .then(data => setLongAndLat({lat:data[0].lat ,lon:data[0].lon }))
          .catch(error => setError("Error",error))
          

     }

     const getWeather =()=>{
       fetch(`${API_WEATHER_URL}lat=${longAndLat.lat}&lon=${longAndLat.lon}&units=metric&exclude={}&appid=${API_KEY}`) 
        .then(response => response.json())
        .then(data => setResult(data))
       .then(error => console.error(error))
       .catch(error => setError("Error",error))

     }

useEffect(()=>{


getLongAndLat()

},[])


useEffect(()=>{

getWeather()
setDailyWeather(result.daily)
setError("")
 },[longAndLat])



console.log(result)*/


return(
<SearchButton apiCall={getLongAndLat} label={"Click ME"}/>


)


}
export default ApiCalls