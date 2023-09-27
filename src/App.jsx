import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

export default function App() {
  const [searchImg, setSearchImg] = useState('');

  return (
    <SearchBar searchImg={searchImg} setSearchImg={setSearchImg}/>
  );
}

