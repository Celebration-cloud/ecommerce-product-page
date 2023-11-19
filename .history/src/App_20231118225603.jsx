import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from './NavBar/Navbar';
import TheBody from './The-Body/TheBody';
import { useEffect, useState } from 'react';

function App() {
  const [detail, setDetail] = useState([]);

  const handleDetail = (info) => {
    const stored = localStorage.getItem("shop")
    ? JSON.parse(localStorage.getItem("shop")) : [];
    if (!stored.includes(info)) {
    setDetail(prev => [...prev, info])
  }
  useEffect(function(){
    function storage(){
      if(!localStorage.getItem("shop")){
        localStorage.setItem("shop", JSON.stringify(detail))
      }
    }
    storage()
  }, [detail])
  const handleRemove = (id) => {
    setDetail(item => item.filter((item) => item.id !== id))
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