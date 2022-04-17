import './App.css';
import Header from './Components/Header';
import CharacterGrid from './Components/CharacterGrid';
import Search from './Components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItem(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;