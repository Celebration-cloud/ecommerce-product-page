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

  const handleDetail = (info) => {
    setDetail(prev => [...prev, info])
    console.log(detail)
  }

  return (
    <div>
    <Navbar detail={detail}/>
    <TheBody handleDetail={handleDetail} set/>
    </div>
  );
}

export default App

{/*  */}