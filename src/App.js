import logo from './logo.svg';
import './App.css';
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
            <Card />
        </div>
    </div>
  );
}

export default App;
