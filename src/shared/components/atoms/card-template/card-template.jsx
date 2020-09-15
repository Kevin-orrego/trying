import React from 'react';
import './card-template.scss'

/**
 * 
 * props:
 * Type [requerido]: Indica el tipo de card template del componente
 * Title [requerido]: Ingresar el titulo de la card
 * ClassName [Opcional]: Permite agregar una clase para modificar el componente
 * Children [Requerido]: Permite agregar el contenido a la card
 */

const CardTemplate = props => {

    const { type, title, className, children } = props;

    return (
        <div className={className ? "f-card-container " + className : "f-card-container"}>
            <h2 className={"f-card-title " + (type ? type : '')}>
                {title}
            </h2>
            {!type && <span className="f-separator"></span>}
            {children}
        </div>
    )
}

export default CardTemplate
