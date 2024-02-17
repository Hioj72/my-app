/* Este componente muestra la parte central del documento */
import React from 'react';

const Cuerpo = ()=>{
    
    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Contenedor</td>
                            <td>Sku</td>
                            <td>Descripción</td>
                            <td>Unidades</td>
                            <td>Escaneado</td>
                        </tr>
                    </thead>
                    <tbody>
                            <td>6002011</td>
                            <td>11231023</td>
                            <td>Television plasma</td>
                            <td>6</td>
                            <td>0</td>
                    </tbody>
                    

                </table>
            </div>
            

        </>


    );      
};

export default Cuerpo;