import React, { useRef } from 'react';
import './section-indicators.scss';
import CardTemplate from '../../atoms/card-template/card-template';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionIndicators = () => {

    const indicatorsInfo = [
        {
            pais: 'Colombia',
            imagen: {
                file: {
                    url: '//images.ctfassets.net/o65uf8qogksw/4nvnn4XzfMRbh1xQRuyVXj/8d865940f44e6af901101d6dbb94f79f/colombia-flag.png'
                },
                description: 'Imagen de noticia'
            },
            primerIndicador: {
                condicion: 'subio',
                porcentaje: '30',
                area: 'Ventas'
            },
            segundoIndicador: {
                condicion: 'bajo',
                porcentaje: '0.5',
                area: 'Talento'
            },
        },
        {
            pais: 'Panama',
            imagen: {
                file: {
                    url: '//images.ctfassets.net/o65uf8qogksw/6nvHqCU6US7Y5w9gKNwe0T/eb240a5cc7ef3d1971e6598dc67879eb/bolivia-flag.png'
                },
                description: 'Imagen de noticia'
            },
            primerIndicador: {
                condicion: 'subio',
                porcentaje: '30',
                area: 'Ventas'
            },
            segundoIndicador: {
                condicion: 'bajo',
                porcentaje: '0.5',
                area: 'Talento'
            },
        },
        {
            pais: 'Perú',
            imagen: {
                file: {
                    url: '//images.ctfassets.net/o65uf8qogksw/4USHwLrVzmjoAGWsjDVO5T/dbfe1703654a55662be1f798516fec0d/peru-flag.png'
                },
                description: 'Imagen de noticia'
            },
            primerIndicador: {
                condicion: 'subio',
                porcentaje: '30',
                area: 'Ventas'
            },
            segundoIndicador: {
                condicion: 'bajo',
                porcentaje: '0.5',
                area: 'Productividad'
            },
        }
    ];

    const slider = useRef(null)

    /*Custom arrow*/
    const SampleNextArrow = () => {
        return (
            <div className={"f-next-arrow"} onClick={() => slider.current.slickNext()}>
                <i className="fas fa-chevron-right"></i>
            </div>
        );
    }

    /*Custom arrow*/
    const PrevCustomArrow = () => {
        return (
            <div className={"f-prev-arrow"} onClick={() => slider.current.slickPrev()}>
                <i className="fas fa-chevron-left"></i>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <PrevCustomArrow />
    };

    const getIndicator = (indicator) => {
        return (
            <div className={"f-indicator " + (indicator.condicion.toLowerCase() == 'subio' ? 'green' : 'red')}>
                <span className="f-indicator-percentage">
                    <i className={"fal fa-arrow-".concat(indicator.condicion.toLowerCase() == 'subio' ? 'up' : 'down')}></i>
                    {indicator.porcentaje}
                </span>
                <span className="f-indicator-area">
                    {"% " + indicator.area}
                </span>
            </div>
        )
    }

    const listItems = indicatorsInfo.map((element, index) => {
        return (
            <div key={index}>
                <div className="f-indicators-body">
                    <div className="f-indicators-country">
                        <figure className="f-country-image-container">
                            <img className="f-country-image" src={element.imagen.file.url} alt={"icono " + element.pais} />
                        </figure>
                        <span className="f-country-title">{element.pais}</span>
                    </div>
                    <div className="f-indicators-shop-productivity">
                        {getIndicator(element.primerIndicador)}
                        {getIndicator(element.segundoIndicador)}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="f-indicators-section">
            <CardTemplate
                title={"Indicadores familia"}
                type={'blue'}
            >
                <Slider ref={slider} {...settings} className="f-indicators-slider">
                    {listItems}
                </Slider>
            </CardTemplate>
        </div>
    )
}

export default SectionIndicators
