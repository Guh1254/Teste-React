// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Login from './pages/login';
import CadastroInstituicao from './pages/cadastroInstituicao'; 
import RecuperarSenha from './pages/recuperar-Senha'; 
import CadastroAdm from './pages/cadastro-adm';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroInstituicao" element={<CadastroInstituicao />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastro-adm" element={<CadastroAdm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
