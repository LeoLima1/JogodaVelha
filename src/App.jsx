import { useState } from 'react'
import Game from './Componentes/Game'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <Game />
    </section>
     
    </>
  )
}

export default App
