import React, { Fragment } from 'react';
import './header.css'
import * as Faicons from 'react-icons/fa';
import { DEFAULT_IMAGEM_THUMBNAIL } from '../../../config/Config';

const Header = () => {
  return (
    <Fragment>
        <header className='app-header'>
            <div className='app-leftarea'>
                <h4>
                    SISTEMA <span>IFSP</span>
                </h4>
            </div>

            <div className='app-toggle'>
                <i>
                    <Faicons.FaBars/>
                </i>
            </div>

            <div className='app-profile'>
                <img src={DEFAULT_IMAGEM_THUMBNAIL} alt='foto'></img>
                <span>Ana Helena</span>

                <div className='app-logout'>
                <i>
                    <Faicons.FaSignOutAlt/>
                </i>
                </div>
            </div>

        </header>  
    </Fragment>
    
    
  )
}

export default Header;
