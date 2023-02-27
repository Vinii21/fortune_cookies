import { useState } from 'react'
import './App.css'
import Paper from './components/Paper'
import Author from './components/Author'
import Button from './components/Button'
import phrases from './data/phrases.json'
import backgrounds from './data/backgrounds'
import Footer from './components/Footer'

function App() {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(0)
  console.log(backgrounds)
  
  const changeIndex = () => {
      setIndex(Math.floor(Math.random() * phrases.length))
      setBackground(Math.floor(Math.random() * backgrounds.length))
  }  

  return (
    <div className="App" style={{ backgroundImage: "url(" + backgrounds[background] + ")" }}>
      <h1>Galletas de la Fortuna</h1>
      <Paper phraseData={phrases[index]}/>
      <Author phraseData={phrases[index]}/>
      <Button changeIndex={changeIndex}/>
      <Footer />
    </div>
  )
}

export default App
