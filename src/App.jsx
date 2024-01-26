import {HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Formulario from "./pages/Formulario";
import Proyectos from "./pages/Proyectos";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AppProvider>
      </HashRouter>
    </>
  );
}

export default App;
