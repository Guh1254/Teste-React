// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Login from './pages/login';
import CadastroInstituicao from './pages/cadastroInstituicao'; 
import RecuperarSenha from './pages/recuperar-Senha'; 
import CadastroAdm from './pages/cadastro-adm';
import AbrirVendas from './pages/abrir-vendas';
import AdicionarProduto from './pages/adicionar-produto';
import CadastrarComunidade from './pages/cadastrar-comunidade';
import CadastrarVendedor from './pages/cadastrar-vendedor';
import CriarMeta from './pages/criar-metas';
import EditarComunidade from './pages/editar-comunidade';
import EditarConta from './pages/editar-conta';
import EditarInstituicao from './pages/editar-instituicao';
import EditarMeta from './pages/editar-meta';
import EditarProduto from './pages/editar-produto';
import FinalizarVenda from './pages/finalizar-venda';
import HubAdm from './pages/hub-adm';
import HubVendedor from './pages/hub-vendedor';
import DetalhesMeta from './pages/meta-detalhes';
import TelaMeta from './pages/tela-meta';
import VendaConcluida from './pages/venda-concluida';
import Vendendo from './pages/vendendo';
import Estatisticas from './pages/visualizar-estatisticas';
import EstoqueProdutos from './pages/visualizar-estoque';
import VisualizarLugares from './pages/visualizar-lugares';
import VisualizarMetas from './pages/visualizar-metas';
import VisualizarRelatorios from './pages/visualizar-relatorios';
import VendasConcluidas from './pages/visualizar-vendas-concluidas';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroInstituicao" element={<CadastroInstituicao />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastro-adm" element={<CadastroAdm />} />
        <Route path="/abrir-vendas" element={<AbrirVendas />} />
        <Route path="/adicionar-produto" element={<AdicionarProduto/>} />
        <Route path="/cadastrar-comunidade" element={<CadastrarComunidade/>} />
        <Route path="/cadastrar-vendedor" element={<CadastrarVendedor/>} />
        <Route path="/criar-metas" element={<CriarMeta/>} />
        <Route path="/editar-comunidade" element={<EditarComunidade/>} />
        <Route path="/editar-conta" element={<EditarConta/>} />
        <Route path="/editar-instituicao" element={<EditarInstituicao/>} />
        <Route path="/editar-meta" element={<EditarMeta/>} />
        <Route path="/editar-produto" element={<EditarProduto/>} />
        <Route path="/finalizar-venda" element={<FinalizarVenda/>} />
        <Route path="/hub-adm" element={<HubAdm/>} />
        <Route path="/hub-vendedor" element={<HubVendedor/>} />
        <Route path="/meta-detalhes" element={<DetalhesMeta/>} />
        <Route path="/tela-meta" element={<TelaMeta/>} />
        <Route path="/venda-concluida" element={<VendaConcluida/>} />
        <Route path="/vendendo" element={<Vendendo/>} />
        <Route path="/visualizar-estatisticas" element={<Estatisticas/>} />
        <Route path="/visualizar-estoque" element={<EstoqueProdutos/>} />
        <Route path="/visualizar-lugares" element={<VisualizarLugares/>} />
        <Route path="/visualizar-metas" element={<VisualizarMetas/>} />
        <Route path="/visualizar-relatorios" element={<VisualizarRelatorios/>} />
        <Route path="/visualizar-vendas-concluidas" element={<VendasConcluidas/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
