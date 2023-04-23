import {useState, useEffect} from 'react'
import Usuario from './Usuario'
import './ListaUsuarios.css'
import './loading.css'
import { setApiKey , TOKEN} from './apiKey.js'

function ListaUsuarios () { 
    const [usuarios, setUsuarios] = useState(null)
    const [eliminandoUsuario, setEliminandoUsuario] = useState(false);

    useEffect(() => { getUsers() } , []);

    const getUsers = async () => {
        try {
            const response = await fetch('https://gorest.co.in/public/v2/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const usuarios = await response.json();
            setUsuarios(usuarios);
        } catch (error) {
            console.error(error);
            location.reload();
        }
    }

    const handleDeleteUser = async (userId) => {
        try {
            setEliminandoUsuario(true); // Indicamos que se está eliminando un usuario
            const response = await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            if (response.ok) { 
                getUsers(); // Actualizamos la lista de usuarios 
            } else {
                console.log('Error eliminando usuario');
            }
            setEliminandoUsuario(false); // Indicamos que se ha finalizado la eliminación del usuario
        } catch (error) {
            console.error(error);
        }
    }

    const updateList = async () => {
        getUsers();
    }

    return(
        <>
            <h1>Lista de Usuarios</h1>
            {eliminandoUsuario && <ul className="loading"><li></li><li></li><li></li></ul>}
            {usuarios ? (
                <div className="usuarios">
                    { usuarios.map((usuario) => (
                          <Usuario
                            key={usuario.id}
                            userId={usuario.id}
                            name={usuario.name}
                            email={usuario.email}
                            gender={usuario.gender}
                            status={usuario.status}
                            onDelete={handleDeleteUser}
                            updateList={updateList}
                          />
                        ))             
                    }
                </div>
            ) : (
                <ul className="loading"><li></li><li></li><li></li></ul>
            )}
        </>
    )
}
  
export default ListaUsuarios