import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Frontend/Pages/Home"
import Tuors from "./Frontend/Pages/Tuors"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tuors" element={<Tuors />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
