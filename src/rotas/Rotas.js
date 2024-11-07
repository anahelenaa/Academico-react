import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Alterar from '../pages/usuario/Alterar'
import Incluir from '../pages/usuario/Incluir'
import RotaPrivada from './RotaPrivada'

const Rotas = () => {
  return (
    <Fragment>
        <Routes>
            <Route element={<RotaPrivada/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/usuario/incluir' element={<Incluir/>}/>
                <Route path='/usuario/alterar' element={<Alterar/>}/>
            </Route>
        </Routes>
    </Fragment>
  )
}

export default Rotas
