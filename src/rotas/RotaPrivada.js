import React, { Fragment } from 'react'
import Layout from '../components/layout/Layout'
import { Outlet } from 'react-router-dom'

const RotaPrivada = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default RotaPrivada
