

import { createContext, useState , } from 'react';
import ApiCall from '../components/ApiCall/apiCall';
import DailyResults from '../components/DailyResultsContainer';
import ErrorMessage from '../components/ErrorMessage';
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
    
<Title/>
<SearchBar/>
<ApiCall/>
<ErrorMessage/>
<ResultsContainer/>
<DailyResults/>

    </div>
      </WeatherContext.Provider>
  );
}

export default App;
