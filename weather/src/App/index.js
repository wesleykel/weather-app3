

import { createContext, useState , } from 'react';
import ApiCall from '../components/ApiCall/apiCall';
import ResultsContainer from '../components/MainResultsContainer/mainResult';
import SearchBar from '../components/SearchBar/searchbar';
import Title from '../components/Title';
import './App.css';
export const WeatherContext = createContext("")
function App() {


  const [ city , setCity]= useState("London")
  const [ error , setError] = useState("")
  const [result , setResult] = useState("")
  const [dailyWeather, setDailyWeather]= useState([])

  return (

    <WeatherContext.Provider value ={{city , setCity, error, setError ,result , setResult ,dailyWeather, setDailyWeather}}>
    <div className="App">
    <p>new</p>
<Title/>
<SearchBar/>
<ApiCall/>
<ResultsContainer/>

    </div>
      </WeatherContext.Provider>
  );
}

export default App;
