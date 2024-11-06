// src/pages/VendasConcluidas.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import '../styles/visualizar-vendas-concluidas.css'; // Arquivo CSS da página

function VendasConcluidas() {
  const vendas = [
    { id: '001', total: 'R$ 200,00', data: '15/09/2024' },
    { id: '002', total: 'R$ 150,00', data: '16/09/2024' },
    { id: '003', total: 'R$ 300,00', data: '17/09/2024' },
  ];

  return (
    <div className="container">
      <header>
        <h1>Vendas Concluídas</h1>
      </header>

      <div className="sales-list">
        <ul>
          {vendas.map((venda) => (
            <li key={venda.id}>
              <span>
                Venda #{venda.id} - {venda.total} - {venda.data}
              </span>
              <Link to={`/venda-concluida/${venda.id}`} className="btn-view-sale">
                Visualizar
              </Link>
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

export default VendasConcluidas;
