/*Este es el componente que muestra la parte de arriba del 
documento*/

import React from 'react';


const Cabecera = ()=>{
    /*Aqui obtenemos la fecha actual para mostrarla cada que se utilice 
     el sistema*/
    const fecha = new Date(); 
    const fechaActual = fecha.toLocaleDateString(); 
    //Vamos a iniciar el contador de folios con el valor 1
    //const folio = 1 ;
    return (
        <>
            <div>
                <p>Departamento:</p>

                <p>Contenedor: </p>
            
            
                <p>Fecha:{fechaActual} </p>
            </div>
            

        </>


    );      
};

export default Cabecera;