import React, { Fragment } from 'react'
import Navegacao from '../../components/message/Navegacao'
import * as FaIcons from 'react-icons/fa'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'
import * as MdIcons from 'react-icons/md'

const Incluir = () => {
  return (
    <Fragment>
        <Navegacao
            titulo="Usuario"
            iconTitulo={<FaIcons.FaUserAlt size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Cadastro de usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
        />
    </Fragment>
  )
}

export default Incluir
