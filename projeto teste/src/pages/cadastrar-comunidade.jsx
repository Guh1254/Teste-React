// src/pages/CadastrarComunidade.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Adicionando SweetAlert2 para notificações
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para navegação
import '../styles/cadastrar-comunidade.css';

function CadastrarComunidade() {
  const [community, setCommunity] = useState({
    nome: '',
    localizacao: '',
    responsavel: ''
  });

  const navigate = useNavigate(); // Hook de navegação

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommunity({ ...community, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados, como uma requisição para a API.
    console.log('Comunidade salva:', community);

    // Exibir uma notificação de sucesso
    Swal.fire({
      title: 'Comunidade Cadastrada!',
      text: 'A comunidade foi cadastrada com sucesso.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirecionar para a página de listagem de comunidades (ou qualquer outra página)
      navigate('/comunidades'); // Substitua '/comunidades' pelo caminho correto
    });

    // Resetar o formulário após o envio (opcional)
    setCommunity({ nome: '', localizacao: '', responsavel: '' });
  };

  return (
    <div className="container">
      <header>
        <h1>Cadastrar Comunidade</h1>
      </header>

      <div className="community-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome da Comunidade:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={community.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="localizacao">Localização:</label>
          <input
            type="text"
            id="localizacao"
            name="localizacao"
            value={community.localizacao}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="responsavel">Responsável:</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={community.responsavel}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="btn-submit">
            Salvar Comunidade
          </button>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default CadastrarComunidade;
