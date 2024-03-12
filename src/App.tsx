import './componentes/MeuComponente'
import './App.css'
import MeuComponente from './componentes/MeuComponente'
import './componentes/MeuComponente.css'
function App() {
  let nome = "Tere"
  let sobrenome = "Gay"
  return (
    <>
      <MeuComponente/>
      <h1 className="meu-nome">Ola eu sou {nome} {sobrenome}</h1>
      <h1>Ola eu dou a Bunda</h1>
    </>
  )
}

export default App
