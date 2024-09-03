import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Frontend/Pages/Home"
import Tuors from "./Frontend/Pages/Tuors"
import TuorView from "./Frontend/Pages/TuorView"
import Login from "./Frontend/Pages/Login"
import { AuthProvider } from "./Frontend/Contexts/authContext"
import ProtectedRoute from "./Frontend/Components/ProtectedRoute"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />}/>
          <Route path="/Tuors" element={
            <ProtectedRoute >
              <Tuors />
            </ProtectedRoute>
          }/> 
          <Route path="/Tuors/:id" element={
            <ProtectedRoute>
              <TuorView />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
