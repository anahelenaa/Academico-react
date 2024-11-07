import React, { Fragment } from 'react'
import './navegacao.css';
import { Link } from 'react-router-dom';

const Navegacao = ({iconTitulo, titulo, descricao, iconReturn, caminho, url, tituloUrl}) => {
  return (
    <Fragment>
        <div className='app-titulo-sistema'>
            <div>
                <h3>
                    <i>
                        {iconTitulo}
                    </i>
                    {titulo}
                </h3>
                <p>
                    {descricao}
                </p>
            </div>
            <div className='font-navegacao'>
                <ul className='breadcrumb'>

                    <li className='breadcrumb-item'>
                        {iconReturn}
                    </li>

                    {caminho ? <li className='breadcrumb-item'>{caminho}</li> : null}

                    <li><Link to={url}>{tituloUrl}</Link></li>

                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default Navegacao
