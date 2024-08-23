import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Frontend/Pages/Home"
import Tuor from "./Frontend/Pages/Tuor"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tuor" element={<Tuor />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
