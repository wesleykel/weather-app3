import  style from "./Search.module.css"
//import { useContext } from 'react'
//import { SearchContext } from '../..'

const SearchBar = () => {


/*const {city, setCity} = useContext(SearchContext)*/
//value={city} type={"text"} onChange={(e)=>setCity(e.target.value)} 
return (
        <div className={style.wrapper}>
        <label>Search</label>
          <input className={style.input}          placeholder={"City"}></input>  
        </div>
    )
}

export default SearchBar