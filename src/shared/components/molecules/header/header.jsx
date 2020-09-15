import React, { useState } from 'react'
import './header.scss'
import logo from '../../../assets/images/logo.svg'
import homeLink from '../../../utils/siteUrl'
import mockImg from '../../../assets/images/profile.jpeg'

const Header = props => {

    const [searcherOpened, setsearcherOpened] = useState(false)

    return (
        <header className="f-header">
            <a className="f-logo-container" href={homeLink}>
                <img
                    src={logo}
                    alt="Logo Grupo Familia"
                    className="f-logo"
                />
            </a>
            <div className="f-right-header-container">
                <div className={"f-searcher-container " + (searcherOpened ? 'active' : '')} onClick={() => setsearcherOpened(!searcherOpened)}>
                    {searcherOpened ?
                        null
                        :
                        <i className="fas fa-search"></i>
                    }
                </div>
                <div className="f-notification-container">
                    <div className="f-icon-notification-container">
                        <i className="f-icon-notification fal fa-bell"></i>
                    </div>
                </div>
                <div className="f-profile-container">
                    <div className="f-name-rol-container">
                        <div className="f-name-container">
                            Santiago <b>Rodriguez</b>
                        </div>
                        <div className="f-rol-container">
                            Desarrollo de Marca
                        </div>
                    </div>
                    <div className="f-profile-picture-container">
                        <img
                            className="f-profile-picture"
                            alt="Foto de perfil"
                            src={mockImg}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
