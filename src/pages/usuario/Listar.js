import React, { Fragment } from 'react'
import Navegacao from '../../components/message/Navegacao'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'

const Listar = () => {
  return (
    <Fragment>
        <Navegacao
          titulo="Usuário"
          iconTitulo={<AiIcons.AiFillDashboard size={BUTTON_SIZE_SHOW_MESSAGE}/>}
          descricao="Listagem de usuários"
          
        />


    </Fragment>
  )
}

export default Listar
