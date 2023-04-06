import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"


function App() { 
  const cards = data.map(item => {
    return (
          <Card 
              item={item}
         />
    )
  })

  return (
    <div className="App">
        <Navbar />
        <main>
         {cards}
        </main>
    </div>
  )
}

export default App
