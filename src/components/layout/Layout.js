import React, { Fragment } from 'react';
import Header from './header/Header';
import Sidebar from './menu/Sidebar';

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <Sidebar/>
    </Fragment>
  )
}

export default Layout;
