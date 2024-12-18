// src/pages/EditarConta.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Para notificações
import '../styles/editar-conta.css';

function EditarConta() {
  // Estado inicial com os valores já preenchidos
  const [usuario, setUsuario] = useState({
    nome: 'Gustavo Costa',
    email: 'gustavo@paz.com',
    senha: '12345678',
  });

  const [formValid, setFormValid] = useState(true); // Estado para controle de validação

  // Função para lidar com as mudanças nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  // Função para lidar com a validação do formulário
  const validateForm = () => {
    // Simples validação (pode ser melhorada conforme necessário)
    const isValid = usuario.nome && usuario.email && usuario.senha.length >= 6;
    setFormValid(isValid);
    return isValid;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Se o formulário não for válido, não enviamos
      return;
    }

    // Exibir notificação de sucesso
    Swal.fire({
      title: 'Sucesso!',
      text: 'As alterações foram salvas com sucesso.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    console.log('Alterações salvas:', usuario);
  };

  return (
    <div className="container">
      <header>
        <h1>Editar Conta</h1>
      </header>

      <div className="account-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={usuario.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={usuario.senha}
            onChange={handleInputChange}
            required
          />

          <button
            type="submit"
            className="btn-submit"
            disabled={!formValid} // Desabilitar o botão de envio enquanto o formulário está inválido
          >
            Salvar Alterações
          </button>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Projeto PAZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default EditarConta;
