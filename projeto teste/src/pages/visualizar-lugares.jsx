import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/visualizar-lugares.css';

function VisualizarLugares() {
  const navigate = useNavigate();

  const handleAddPlaceClick = () => {
    navigate('/cadastrar-comunidade'); // Redireciona para a página de cadastro de comunidade
  };

  return (
    <div className="container">
      <header>
        <h1>Lugares Cadastrados</h1>
      </header>

      <div className="place-list">
        <ul>
          <li><Link to="/editar-comunidade">Comunidade A</Link></li>
          <li><Link to="/editar-comunidade">Comunidade B</Link></li>
          <li><Link to="/editar-comunidade">Comunidade C</Link></li>
        </ul>
      </div>

      <button className="btn-add-place" onClick={handleAddPlaceClick}>
        Adicionar Comunidade
      </button>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default VisualizarLugares;
