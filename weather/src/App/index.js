

import ApiCall from '../components/ApiCall/apiCall';
import SearchBar from '../components/SearchBar/searchbar';
import Title from '../components/Title';
import './App.css';

function App() {
  return (
    <div className="App">
<Title/>
<ApiCall/>
<SearchBar/>
    </div>
  );
}

export default App;
