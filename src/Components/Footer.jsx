/* Este componente muestra la parte inferior del documento */
import React from 'react';

const Footer = ()=>{
    
    return (
        <>
            <div>
                <p>Elaborado por:</p>

                <form>
                    <label htmlFor='correos'>Enviar a:</label>
                    <select id="correos" name="correos" multiple>
                        <option value="ivan.ojeda@gmail.com">Iván Ojeda</option>
                        <option value="hector.ojeda@gmail.com">Hector Meza</option>
                    </select>
                </form>
            </div>
            

        </>


    );      
};

export default Footer;