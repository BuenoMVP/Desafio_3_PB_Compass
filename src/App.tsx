import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Frontend/Pages/Home"
import Tuors from "./Frontend/Pages/Tuors"
import TuorView from "./Frontend/Pages/TuorView"
import Login from "./Frontend/Pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/Tuors" element={<Tuors />}/> 
        <Route path="/Tuors/:id" element={<TuorView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
