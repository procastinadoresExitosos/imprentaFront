import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import RutasProtegidas from "./components/RutasProtegidas";
import Home from "./pages/home/Home";
import BarraNavegacion from "./components/barraNavegacion/BarraNavegacion";
import { NotFoundError } from "./components/errores/NotFoundError";
import FormUsuarios from "./components/usuarios/formUsuarios/FormUsuarios";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ModuloUsuraios } from "./pages/dashboard/ModuloUsuraios";
import { useSelector } from "react-redux";

function App() {
  const loader = useSelector((state) => state.loader);
  return (
    <>
      {loader && (
        <div className="overlay">
          <div className="loadingio-eclipse">
            <div className="ldio-rpinwye8j0b">
              <div></div>
            </div>
          </div>
        </div>
      )}
      <BrowserRouter>
        <div className="App">
          <BarraNavegacion />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<FormUsuarios />} />
            <Route element={<RutasProtegidas />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="usuarios" element={<ModuloUsuraios />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
