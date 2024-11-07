import React, { Fragment, useState } from 'react';
import Header from './header/Header';
import Sidebar from './menu/Sidebar';
import Dashboard from '../../pages/Dashboard';



const Layout = ({children}) => {

  const [toggle, setToggle] = useState(true);

  const toggleClick = () => {
    setToggle(!toggle);
  }
  return (
    <Fragment>
        <Header toggleHeader = {toggleClick} />
        <Sidebar toggleSidebar = {toggle} />
        <main> className={toggle ? 'app-content active' : 'app-content'}
          {children}
        </main>
    </Fragment>
  )
}

export default Layout;
