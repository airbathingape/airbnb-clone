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
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
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
