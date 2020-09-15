import React, { useState } from 'react'
import './nav-menu.scss'
import useMobile from '../../../hooks/useMobile'
import mockImg from '../../../assets/images/profile.jpeg'

const NavMenu = props => {
    const { activeMenu } = props;

    const isMobile = useMobile();

    const optionsMenu = [
        {
            iconInactive: <i className="f-icon fal fa-coffee"></i>,
            iconActive: <i className="f-icon fal fa-mug-hot"></i>,
            title: 'Home',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-star"></i>,
            iconActive: <i className="f-icon fal fa-star"></i>,
            title: 'Cultura Familia',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-user-friends"></i>,
            iconActive: <i className="f-icon fal fa-user-friends"></i>,
            title: 'Empleados',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-book-open"></i>,
            iconActive: <i className="f-icon fal fa-book-open"></i>,
            title: 'Convocatorias',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-clipboard"></i>,
            iconActive: <i className="f-icon fal fa-clipboard"></i>,
            title: 'Certificaciones',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-smile"></i>,
            iconActive: <i className="f-icon fal fa-smile"></i>,
            title: 'Foro',
            redirect: '#'
        },
        {
            iconInactive: <i className="f-icon fal fa-exclamation-circle"></i>,
            iconActive: <i className="f-icon fal fa-exclamation-circle"></i>,
            title: 'Contacto y FAQ`S',
            redirect: '#'
        },
    ]

    const menuMobile = [
        {
            icon: <i className="f-icon far fa-bars"></i>,
            title: 'Menú',
            redirect: '#'
        },
        {
            icon: <i className="far fa-search"></i>,
            title: 'Búsqueda',
            redirect: '#'
        },
        {
            icon: <i className="f-icon far fa-bars"></i>,
            title: 'Menú',
            redirect: '#'
        },
        {
            icon: <i className="fal fa-bell"></i>,
            title: 'Notificaciones',
            redirect: '#'
        },
        {
            icon: <i className="f-icon far fa-bars"></i>,
            title: 'Menú',
            redirect: '#'
        },
    ]

    const [isOpened, setisOpened] = useState(false)

    const mobileMenu = (
        <nav className="f-menu-mobile-container">
            <div className="f-item-mobile-menu" onClick={() => setisOpened(!isOpened)}>
                <div className="f-item-top-container">
                    <i className="f-icon fal fa-bars"></i>
                </div>
                <div className="f-item-bottom-container">
                    Menú
                </div>
            </div>
            <div className="f-item-mobile-menu">
                <div className="f-item-top-container">
                    <i className="f-icon fal fa-search"></i>
                </div>
                <div className="f-item-bottom-container">
                    Búsqueda
                </div>
            </div>
            <div className="f-item-mobile-menu">
                <div className="f-item-top-container">
                    <i className="f-icon fal fa-shapes"></i>
                </div>
                <div className="f-item-bottom-container">
                    {/* Accesos directos */}
                    Apps
                </div>
            </div>
            <div className="f-item-mobile-menu">
                <div className="f-item-top-container">
                    <i className="f-icon fal fa-bell"></i>
                </div>
                <div className="f-item-bottom-container">
                    Notificaciones
                </div>
            </div>
            <div className="f-item-mobile-menu">
                <div className="f-item-top-container f-item-top-img-container">
                    <img
                        className="f-profile-img-mobile"
                        alt="Imagen de perfil"
                        src={mockImg}
                    />
                </div>
                <div className="f-item-bottom-container">
                    Perfil
                </div>
            </div>
        </nav>
    )

    return (
        <>
            <div className={"f-menu-container " + (isOpened ? 'active' : 'inactive')} onClick={() => !isOpened && !isMobile && setisOpened(true)}>
                {!isOpened ?
                    <div className="f-icon-menu-container">
                        <i className="f-icon far fa-bars"></i>
                    </div>
                    :
                    <div className="f-list-menu-container">
                        <div className="f-close-icon-container" onClick={() => isOpened && setisOpened(false)}>
                            <i className="fal fa-times"></i>
                        </div>
                        {optionsMenu.map((item, index) => {
                            let isActive = index === activeMenu
                            return (
                                <a className={"f-item-menu " + (isActive ? 'active' : '')} href={item.redirect} key={index}>
                                    <div className={"f-icon-menu-container " + (isActive ? 'active' : '')}>
                                        {isActive ? item.iconActive : item.iconInactive}
                                    </div>
                                    <div className="f-title-menu-container">
                                        {item.title}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                }
            </div>
            {mobileMenu}
        </>
    )
}

export default NavMenu
