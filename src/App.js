import './App.css';

import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {

  const cards = data.map(item => {
    return(
      <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title="Life Lessons with Katie Zaferes"
      price={136}
    />
    )
  })

  return (
    <div className="App">
              <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    </div>
  );
}

export default App;
