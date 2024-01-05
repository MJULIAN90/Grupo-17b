import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar/index.jsx';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar 
            onSearch={(characterID) => window.alert(characterID)} 
         />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
