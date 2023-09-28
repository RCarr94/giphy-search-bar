import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

export default function App() {
  const [searchImgs, setSearchImgs] = useState('');
  const [gifs, setGifs] = useState([]);

  const searchOptions = {
    key: '93sHYga5MbpfCx5UT4WjVAQXXqK4XP9Y',
    api: 'https://api.giphy.com/v1/gifs/search'
  };

function getGifs(searchImgs) {
  const url = `${searchOptions.api}?api_key=${searchOptions.key}&q=${searchImgs}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setGifs(res.data);
    })
}

  return (
    <>
    <SearchBar searchImgs={searchImgs} setSearchImgs={setSearchImgs} getGifs={getGifs}/>
    <GifList gifs={gifs}/>
    </>
  );
}

