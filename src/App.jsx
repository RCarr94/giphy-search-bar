import { useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

export default function App() {
  const [searchImgs, setSearchImgs] = useState('hello');
  const [gifs, setGifs] = useState([]);
  // const apiKey = process.env.GIPHY_API_KEY;
  useEffect(() => {
    getGifs(searchImgs)
  },[]);

  const searchOptions = {
    key: '93sHYga5MbpfCx5UT4WjVAQXXqK4XP9Y',
    api: 'https://api.giphy.com/v1/gifs/search',
  };

async function getGifs(searchImgs) {
  const url = `${searchOptions.api}?api_key=${searchOptions.key}&q=${searchImgs}`;

    const res = await fetch(url);
    const data = await res.json();
    setGifs(data.data);
    setSearchImgs('');
}

  return (
    <>
    <SearchBar searchImgs={searchImgs} setSearchImgs={setSearchImgs} getGifs={getGifs}/>
    <GifList gifs={gifs}/>
    </>
  );
}

