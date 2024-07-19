
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginUsers from './Pages/LoginUsers/index';
import api from './api';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost/slscars/api.php');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  return (
    <>
      <LoginUsers />
      <div className="container">
        <h1>Lista de Usuários</h1>
        {usuarios.map(usuario => (
          <div className="ListaDeUsuarios" key={usuario.id}>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

