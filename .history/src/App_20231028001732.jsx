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

  const hand

  return (
    <div>
    <Navbar detail={detail}/>
    <TheBody/>
      {/* Collections Men Women About Contact Sneaker Company Fall Limited Edition
      Sneakers These low-profile sneakers are your perfect casual wear
      companion. Featuring a durable rubber outer sole, they’ll withstand
      everything the weather can offer. $125.00 50% $250.00 0 Add to cart
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}

export default App

{/*  */}