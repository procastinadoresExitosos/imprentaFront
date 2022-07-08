import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import RutasProtegidas from "./components/RutasProtegidas";
import Home from "./pages/home/Home";
import FormUsuarios from "./components/formUsuarios/FormUsuarios";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RutasProtegidas />}>
            <Route path="/usuarios" element={<FormUsuarios />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
