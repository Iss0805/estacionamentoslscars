import  './LoginUsers.css';
import axios from 'axios';
import api from '../../api';

import { useState } from 'react';


function Index(){

    const [usuarios, setUsuarios] = useState([]);
    
    
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');

    async function handleRegister(event){
        event.preventDefault();
        try{
            const data= {
                email,senha
            };

            const response = await api.post('http://localhost/slscars/api.php',data);
           
                alert(`Bem-vindo(a) ao sistema  `)
            
                
                setEmail('');
                setSenha('');
                
                
        } catch(error){
            alert(`Erro no Login. \n Codigo Erro:${error}`);
        }
        
        
    }
      
    
    return (
        <div>
        <img src="./img/Cars_Sls.png" alt="Estacionamento" /> 
        <h1>Login</h1>
        <p>Faça seu Login.</p>
        <form onSubmit={handleRegister}>
            <input type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input type="password"
                placeholder="Senha"
                value={senha}
                onChange={e=> setSenha(e.target.value)}
                required
            />
             <button>
                Acessar
                </button>




             </form>
             </div>
            );












}
export default Index;