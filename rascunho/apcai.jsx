
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export function App() {
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/slscars/')
//       .then(response => {
//         setUsuarios(response.data);
//       })
//       .catch(error => {
//         console.error("Houve um erro ao buscar os dados:", error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Lista de Usuários</h1>
//       {usuarios.map(usuario => (
//         <div className="ListaDeUsuarios" key={usuario.id}>
//           <p>Nome: {usuario.nome}</p>
//           <p>Email: {usuario.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
