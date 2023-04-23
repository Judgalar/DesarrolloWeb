import {useState} from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import ListaUsuarios from './ListaUsuarios'
import CrearUsuario from './CrearUsuario';
import Inicio from './Inicio'
import {setApiKey} from './apiKey'


export function App() {
  const [ventana, setVentana] = useState(0);
  let component;
  
  switch (ventana){
    case 'lista':
      component = <ListaUsuarios />;
      break;
    case 'crear':
      component = <CrearUsuario />;
      break;
    default:
      component = <Inicio />;
  }

  return (
    <>
      <div className='navbar'>
        <button id='BTNusuarios' onClick={ () => setVentana('lista') }><i className="bi bi-people"></i></button>
        <button id='BTNcrearUsuario' onClick={ () => setVentana('crear') }><i className="bi bi-person-add"></i></button>
        <button id='BTNsetApiKey' onClick={ setApiKey }><i className="bi bi-key"></i></button>
      </div>
      <div className='contenedor'>
        {component}
      </div>
    </>
  );
}

export default App