import React from "react";

function Contacto({nombre, apellido, telefono}){
    return(
        <div id="div2">
            <div className="div1">
                <div>
                    Nombre:
                </div>
                <div>
                    {nombre}
                </div>
            </div>

            <div className="div1">
                <div>
                    Apellido: 
                </div>
                <div>
                    {apellido}
                </div>
            </div>

            <div className="div1">
                <div>
                    Telefono: 
                </div>
                <div>
                    {telefono}
                </div>
            </div>      
        </div>   
    );

}
export default Contacto;