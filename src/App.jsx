import { useState } from "react"
import "./App.css"



function App() {

  const [meteor, setMeteor] = useState(0)
  const [horario, setHorario] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  function aumentarMeteor() {
    const day = new Date()

    setHorario(`${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)

    if(meteor >= 0) {
      setMeteor(meteor + 1)
      setIsVisible(true)
    }
    return;
  }

  function clear() {
    setMeteor(0)
  }

  return (
    <main className="container">
      <div className="containerSecund">
        <div className="containerTittleSub">
          <h1 className="tittle">Contador de Meteoros</h1>
          <h3 className="subTittle">Registre seus Meteoros! ☄️</h3>
        </div>

        <div className="containerInfo">
          <div className="numbMeteor">
            <p className="numb">{meteor}</p>
            <p className="textVistos">Meteoros Vistos</p>
          </div>

          <div className="horaMeteor">
            {isVisible ? <p className="text">Ultimo meteoro visto: {horario}</p> : <p></p>}
          </div>

          <div className="containerButtons">
            <button className="button" onClick={() => aumentarMeteor()}>+1 MEMETORO</button>
            <button className="buttonClear" onClick={() => clear()}>REINICIAR CONTAGEM</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
