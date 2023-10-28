import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from './NavBar/Navbar';
import TheBody from './The-Body/TheBody';
import { useState } from 'react';

function App() {
  const [detail, setDetail] = useState([]);
  const [checked, setChecked] = useState()
  const handleDetail = (info) => {
    setDetail(prev => [...prev, info])
    console.log(detail)
  }
  const handleChe
  const handleRemove = (id) => {
    setDetail(item => item.filter((item) => item.id !== id))
  }
  const handleTick = (id) => {
    setDetail(item => item.map((item) => item.id === id && {...item, check: checked}))
  }

  return (
    <div>
    <Navbar detail={detail} handleRemove={handleRemove}/>
    <TheBody handleDetail={handleDetail} />
    </div>
  );
}

export default App

{/*  */}