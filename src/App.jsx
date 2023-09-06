import AppBarCoponent from "./components/AppBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Formulario } from "./pages/Formulario"
import { Asientos } from "./pages/Asientos"
import { PruebaTabla } from "./pages/PruebaTabla"

function App() {



  return (
    <div>
          <BrowserRouter>
          <AppBarCoponent />
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/asientos" element={<Asientos />} />
            <Route path="/tabla" element={<PruebaTabla />} />
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
