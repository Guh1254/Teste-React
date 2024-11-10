import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/editar-meta.css';

function EditarMeta() {
  const [meta, setMeta] = useState({
    nome: 'Meta de Vendas - Janeiro',
    descricao: 'Aumentar as vendas em 20% durante o mês de Janeiro.',
    prazo: '2024-01-31',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeta({ ...meta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as alterações da meta
    console.log('Alterações salvas:', meta);
    
    // Exibindo o alerta de sucesso com SweetAlert
    Swal.fire({
      title: 'Alterações Salvas!',
      text: 'As alterações foram salvas com sucesso.',
      icon: 'success',
      confirmButtonColor: '#32bacc',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirecionar para a página de listagem de metas (ou qualquer outra página)
      navigate('/visualizar-metas'); // Substitua '/visualizar-metas' pela rota de destino desejada
    });
  };

  const handleEncerrarMeta = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você realmente deseja encerrar esta meta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32bacc',
      cancelButtonColor: '#acbcb4',
      confirmButtonText: 'Sim, encerrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Encerrada!', 'A meta foi encerrada com sucesso.', 'success');
        navigate('/visualizar-metas');
      }
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Editar Meta</h1>
      </header>

      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome da Meta:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={meta.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={meta.descricao}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="prazo">Prazo:</label>
          <input
            type="date"
            id="prazo"
            name="prazo"
            value={meta.prazo}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="btn-submit">
            Salvar Alterações
          </button>
          <button
            type="button"
            className="btn-close"
            onClick={handleEncerrarMeta}
          >
            Encerrar Meta
          </button>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default EditarMeta;
