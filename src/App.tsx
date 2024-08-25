import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Frontend/Pages/Home"
import Tuors from "./Frontend/Pages/Tuors"
import TuorView from "./Frontend/Pages/TuorView"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tuors" element={<Tuors />}/>
        <Route path="/View" element={<TuorView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
