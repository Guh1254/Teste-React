// src/pages/EstoqueProdutos.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import '../styles/visualizar-estoque.css'; // Arquivo CSS da página

function EstoqueProdutos() {
  const produtos = [
    { nome: 'Produto A', preco: 50.00 },
    { nome: 'Produto B', preco: 30.00 },
    { nome: 'Produto C', preco: 20.00 }
  ];

  return (
    <div className="container">
      <header>
        <h1>Estoque de Produtos</h1>
      </header>

      <div className="product-list">
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              {produto.nome} - R$ {produto.preco.toFixed(2)}
              <Link to="/editar-produto" className="btn-edit">Editar</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/adicionar-produto" className="btn-add-product">Adicionar Produto</Link>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default EstoqueProdutos;
