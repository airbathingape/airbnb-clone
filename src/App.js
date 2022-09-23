import './App.css';
import image from './images/katie-zaferes.png'

import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
              <div>
            <Navbar />
            <Hero />
            <Card
              img={image}
              rating="5.0"
              reviewCount={6}
              country="USA"
              title="Life Lessons with Katie Zaferes"
              price={136}
            />
        </div>
    </div>
  );
}

export default App;
