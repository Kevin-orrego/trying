import React from 'react'
import './footer.scss'
// import logoDark from '../../../assets/images/logo_dark.png'

//-------DELETE WHEN CMS--------
// import arFlag from './MOCKpaises/argentina.png'
// import coFlag from './MOCKpaises/colombia.png'
// import ecFlag from './MOCKpaises/ecuador.png'
// import clFlag from './MOCKpaises/chile.png'
// import peFlag from './MOCKpaises/peru.png'
// import doFlag from './MOCKpaises/do.png'

//-------DELETE WHEN CMS--------

const Footer = props => {

    // const MockPaises = [
    //     {
    //         nombre: 'Colombia',
    //         bandera: coFlag,
    //         linea: '018000-125-255'
    //     }, {
    //         nombre: 'Ecuador',
    //         bandera: ecFlag,
    //         linea: '018000-000-313'
    //     }, {
    //         nombre: 'Argentina',
    //         bandera: arFlag,
    //         linea: '0800-222-1855'
    //     },
    //     {
    //         nombre: 'Chile',
    //         bandera: clFlag,
    //         linea: '188-800-330-011'
    //     },
    //     {
    //         nombre: 'Perú',
    //         bandera: peFlag,
    //         linea: '0800-55-972'
    //     },
    //     {
    //         nombre: 'República Dominicana',
    //         bandera: doFlag,
    //         linea: '1-8001485110'
    //     },
    // ]

    return (
        <footer className="f-footer">
            <div className="f-info-footer-container">

                {/* <div className="f-footer-section f-left-footer-section">
                    <div className="f-footer-logo">
                        <img 
                            className="f-footer-logo-img"
                            alt="Logo grupo familia"
                            src={logoDark}
                        />
                    </div>
                </div> */}
                <div
                    className="f-footer-separator-line"
                />
                <div className="f-footer-section f-center-footer-section">
                    {/* <h3 className="f-footer-title">Canales de comunicación</h3>

                    <a className="f-contact-link" href='#'>www.grupofamilia.com</a>
                    <div className="f-contact-link" >comunicacionesfam@grupofamilia.com</div>
                    <div className="f-contact-link" >carolinaOR@grupofamilia.com</div> */}

                    <div className="f-social-list-container">
                        <a className="f-social-icon-container" href='#'>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="f-social-icon-container" href='#'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="f-social-icon-container" href='#'>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="f-social-icon-container" href='#'>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="f-footer-section f-right-footer-section">
                {/* <h3 className="f-footer-title">Linea de transparencia</h3>
                    <div className="f-footer-subtitle">Llámanos gratis siempre que lo necesites:</div>
                     <div className="f-list-country-container">
                        {MockPaises.map((item, index) => {
                            return (
                                <div className="f-country-container" key={index}>
                                    <div className="f-flag-container">
                                        <img
                                            className="f-flag-img"
                                            alt="Imagen pais"
                                            src={item.bandera}
                                        />
                                    </div>
                                    <div className="f-info-country">
                                        <div className="f-country-name">
                                            {item.nombre}
                                        </div>
                                        <div className="f-country-line">
                                            {item.linea}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}
                </div>

            </div>
        </footer>
    )
}

export default Footer
