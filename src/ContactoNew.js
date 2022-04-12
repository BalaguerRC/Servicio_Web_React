import React, {useRef} from "react";
import { basededatos } from "./configFireBase";
import './Contacto';

function ContactoNew({AddNuevoContacto}){
    const nombreRef= useRef(null);
    const apellidoRef= useRef(null);
    const telefonoRef= useRef(null);

    const agregarcontacto=()=>{
        const contacto={
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            telefono: telefonoRef.current.value,
        }
        basededatos.collection('contactos').add(contacto);

        nombreRef.current.value="";
        apellidoRef.current.value="";
        telefonoRef.current.value="";
        AddNuevoContacto(contacto);
    }
    return(
        <div>
            <div className="contenedor">
                Nombre
                <input ref={nombreRef} type="text"></input>
                <p></p>
                Apellido:
                <input ref={apellidoRef} type="text"></input>
                <p></p>
                Telefono:
                <input ref={telefonoRef} type="text"></input>
                <p></p>
                <button className="boton" onClick={agregarcontacto}>Enviar</button>
            </div>
        </div>
    );
}

export default ContactoNew;