// src/pages/DetalhesMeta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa o SweetAlert2
import '../styles/meta-detalhes.css';

function DetalhesMeta() {
  const meta = {
    nome: "Meta de Vendas - Janeiro",
    objetivo: "Atingir R$ 10.000 em vendas no mês de Janeiro.",
    progresso: "R$ 6.500",
    dataInicio: "01/01/2024",
    dataTermino: "31/01/2024",
    status: "Em andamento"
  };

  // Função para lidar com o encerramento da meta usando SweetAlert2
  const handleEncerrarMeta = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você quer realmente encerrar essa meta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, encerrar meta!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Encerrada!',
          'A meta foi encerrada com sucesso.',
          'success'
        );
      }
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Detalhes da Meta</h1>
      </header>

      <div className="meta-details">
        <h2>{meta.nome}</h2>
        <p><strong>Objetivo:</strong> {meta.objetivo}</p>
        <p><strong>Progresso Atual:</strong> {meta.progresso}</p>
        <p><strong>Data de Início:</strong> {meta.dataInicio}</p>
        <p><strong>Data de Término:</strong> {meta.dataTermino}</p>
        <p><strong>Status:</strong> {meta.status}</p>

        <div className="actions">
          <Link to="/editar-meta" className="btn-edit">Editar Meta</Link>
          <button className="btn-close" onClick={handleEncerrarMeta}>Encerrar Meta</button>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default DetalhesMeta;
