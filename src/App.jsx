import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InfoComp from './components/InfoComp'
import {ways, differences} from './data'
import ButtonClicked from './ButtonClick/ButtonClicked'

function App() {
  const [count, setCount] = useState(0)
  const[name, setName] = useState('way')

  function handleClickMain(newName) {
    console.log("Clicked Main " + newName);
    setName(newName);
  }
  return (
    <div>
      <Header/>
      <InfoComp title="Header" description="11111"/>
      <InfoComp title="Title"  description="text" age ="12"/>
      <InfoComp title={ways[1].title} description={ways[1].description} />
      <InfoComp {...ways[2]} />
      <ButtonClicked buttonClicked={() =>handleClickMain('way')} >Way</ButtonClicked>
      <ButtonClicked buttonClicked={() =>handleClickMain('easy')} >Easy</ButtonClicked>
      <ButtonClicked buttonClicked={() =>handleClickMain('program')} >Program</ButtonClicked>

      <p>{differences[name]}</p>
    </div>
  )
}

export default App
