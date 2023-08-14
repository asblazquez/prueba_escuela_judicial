import AppBarCoponent from "./components/AppBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Formulario } from "./pages/Formulario"

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppBarCoponent />
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
