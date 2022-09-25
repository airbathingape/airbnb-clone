import './App.css';

import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <section className='card-list'>
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
