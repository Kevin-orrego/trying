import React from 'react';
import './section-applications.scss';
import CardTemplate from '../../atoms/card-template/card-template';
import applicationInfo from './main-applications.json'

const SectionApplications = () => {

    const applicationContent = applicationInfo;

    const getItems = (inicio, fin) => {
        return applicationContent.slice(inicio, fin);
    }

    const listItems = array => array.map((element, index) => {
        return (
            <div className="f-application-container" key={index}>
                <a className="f-image-container" href={element.slug}>
                    <img src={element.icon} alt="icono de aplicacion" />
                </a>
                <div className="f-tooltip-container">
                    <span className="f-tooltip">{element.title}</span>
                </div>
            </div>
        )
    })

    return (
        <div className="f-application-section">
            <CardTemplate
                title={"Aplicaciones"}
                type={'pink'}
            >
                <div className="f-application-list">
                    <div className="f-list-container f-first-list">
                        {listItems(getItems(0, 3))}
                    </div>
                    <span className="f-separator"></span>
                    <div className="f-list-container f-second-list">
                        {listItems(getItems(3, 6))}
                    </div>
                    <a className="f-button-show-more" href="localhost:8000">Ver más</a>
                </div>
            </CardTemplate>
        </div>
    )
}

export default SectionApplications
