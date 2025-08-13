import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlunoDescrição from './components/alunoDescrição'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Carlos Daniel</h2>
     <div>Dev Fullstack</div>
     <hr />

     <h3>Alunos</h3>

     
     <AlunoDescrição
     nome={"Carlos Daniel"}
     idade={24} />
    </>
    
  )
}

export default App
