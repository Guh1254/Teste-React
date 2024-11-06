// src/pages/EditarComunidade.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Para notificações
import { useNavigate } from 'react-router-dom'; // Para navegação
import '../styles/editar-comunidade.css';

function EditarComunidade() {
  const [comunidade, setComunidade] = useState({
    nome: 'Comunidade A',
    localizacao: 'Rua Exemplo, 123',
    responsavel: 'João Silva',
  });

  const [loading, setLoading] = useState(false); // Estado para controle de carregamento
  const navigate = useNavigate(); // Hook de navegação

  // Função para lidar com mudanças nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComunidade({ ...comunidade, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciar o carregamento

    // Aqui você pode adicionar a lógica para atualizar a comunidade, como uma chamada para API
    // Vamos simular um delay de 2 segundos para ilustrar o processo de envio
    setTimeout(() => {
      console.log('Comunidade atualizada:', comunidade);

      // Exibir uma notificação de sucesso
      Swal.fire({
        title: 'Comunidade Atualizada!',
        text: 'As informações da comunidade foram atualizadas com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirecionar após o sucesso
        navigate('/comunidades'); // Substitua '/comunidades' pela página de listagem de comunidades ou qualquer outra
      });

      setLoading(false); // Finalizar o carregamento
    }, 2000); // Simulando um atraso de 2 segundos (substitua com a lógica real de requisição)
  };

  // Função para excluir a comunidade com confirmação
  const handleDelete = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para excluir a comunidade, por exemplo, uma chamada para uma API de exclusão
        console.log('Comunidade excluída');

        // Exibir uma notificação de sucesso
        Swal.fire({
          title: 'Comunidade Excluída!',
          text: 'A comunidade foi excluída com sucesso.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirecionar após a exclusão
          navigate('/comunidades'); // Substitua '/comunidades' pela página de listagem de comunidades ou qualquer outra
        });
      }
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Editar Comunidade</h1>
      </header>

      <div className="community-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome da Comunidade:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={comunidade.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="localizacao">Localização:</label>
          <input
            type="text"
            id="localizacao"
            name="localizacao"
            value={comunidade.localizacao}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="responsavel">Responsável:</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={comunidade.responsavel}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Atualizando...' : 'Atualizar Comunidade'}
          </button>
        </form>

        <button
          type="button"
          className="btn-delete"
          onClick={handleDelete}
          disabled={loading} // Desabilitar o botão enquanto a atualização está sendo realizada
        >
          {loading ? 'Excluindo...' : 'Excluir Comunidade'}
        </button>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default EditarComunidade;
