import {HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Formulario from "./pages/Formulario";
import Proyectos from "./pages/Proyectos";
import Error404 from "./pages/Error404";
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
