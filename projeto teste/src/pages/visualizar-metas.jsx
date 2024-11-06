// src/pages/VisualizarMetas.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import '../styles/visualizar-metas.css'; // Arquivo CSS da página

function VisualizarMetas() {
  const metas = [
    { nome: 'Meta de Vendas - Janeiro', link: '/meta-detalhes' },
    { nome: 'Meta de Doações - Fevereiro', link: '/meta-detalhes' },
    { nome: 'Meta de Eventos - Março', link: '/meta-detalhes' }
  ];

  return (
    <div className="container">
      <header>
        <h1>Metas da Instituição</h1>
      </header>

      <div className="meta-section">
        <ul>
          {metas.map((meta, index) => (
            <li key={index}>
              <div className="meta">
                <p>{meta.nome}</p>
                <Link to={meta.link} className="btn-view">Ver Meta</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default VisualizarMetas;
