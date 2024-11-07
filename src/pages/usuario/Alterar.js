import React, { Fragment } from 'react'
import Navegacao from '../../components/message/Navegacao'
import { FaIcons } from 'react-icons/fa'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'
import * as MdIcons from 'react-icons/md'

const Alterar = () => {
  return (
    <Fragment>
        <Navegacao
            titulo="Usuario"
            iconTitulo={<FaIcons.FaUserEdit size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Manutenção do cadastro de um usuário"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            caminho="Usuário"
            url="/usuario/listar"
            tituloUrl="listagem de usuários"        
        />
    </Fragment>
  )
}

export default Alterar
