import  style from "./Search.module.css"
import { useContext } from 'react'
import { WeatherContext } from "../../App"

const SearchBar = () => {


const {city, setCity} = useContext(WeatherContext)

return (
        <div className={style.wrapper}>
        <label>Search</label>
          <input className={style.input} value={city} type={"text"} onChange={(e)=>setCity(e.target.value)}  placeholder={"City"}></input>  
        </div>
    )
}

export default SearchBar