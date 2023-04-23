import {useState, useEffect} from 'react'
import { TOKEN } from './apiKey.js'
import './CrearUsuario.css'


export default function CrearUsuario (){
    const [registro, setRegistro] = useState(null)

    function registrar (event) {
        event.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const gender = document.getElementById('gender').value
        const status = document.getElementById('status').value

        postUser (name,email,gender,status)
    }
    async function postUser ( _name, _email, _gender, _status ){
        const response = await fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TOKEN,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body : JSON.stringify({ name : _name, email: _email, gender: _gender, status: _status })
        });
        const post = await response.json();
        console.log(post)
        setRegistro(post)


    }

    return(
        <>
            <h1>Crear Usuario</h1>
            <form className='crearUsuario'>
                <input id='name' type="text" required placeholder=' Name'/>
                <input  id ='email' type="email" required placeholder=' E-Mail'/>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <select id="status">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button type="submit" onClick={registrar} >Registrar</button>
            </form>
            {registro?<h1>{JSON.stringify(registro)}</h1>:null}
        </>
    )
}