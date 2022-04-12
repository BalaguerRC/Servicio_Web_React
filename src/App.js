import './App.css';
import {useState, useEffect} from 'react';
import { basededatos } from "./configFireBase";
import Contacto from './Contacto';
import ContactoNew from './ContactoNew';

function App() {

  const [contactos, setContactos] = useState([]);

  const AddNuevoContacto= (contacto) =>{
    const tempContactos = contactos.slice();
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }

  useEffect(()=>{
    const listado=[];

    basededatos.collection('contactos')
    .get()
    .then(resultado => {
      resultado.forEach( contacto=>{
        listado.push(contacto.data());
      })
      setContactos(listado);
    }).catch(error=>console.log(error));
  }, []);

  return (
    <div className='App'>
      hola de nuevo,adios
      <div>

      </div>

      
      <header className='App-header'>
        <div id='div3n'>
          <div id='envio'>
            <ContactoNew AddNuevoContacto={AddNuevoContacto} />
          </div>
          <div id='div2new'>
            {
              contactos && contactos.slice().reverse().map((contacto, i)=>{
              const {nombre, apellido, telefono}= contacto;
              return (<Contacto key={i} nombre={nombre} apellido={apellido} telefono={telefono}/>)
              })
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;