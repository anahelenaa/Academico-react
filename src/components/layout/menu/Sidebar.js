import React, { Fragment } from 'react'
import itens from './SidebarData';
import './sidebar.css';
import ShowItens from './ShowItens';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <Fragment>
        <div className= {toggleSidebar ? 'app-sidebar active' : 'app-sidebar'}>
          {
            itens.map((item, index)=>{
              return (
                <ShowItens
                  key={index}
                  item={item}
                />
              )
            })
          }
        </div>
    </Fragment>
  )
}

export default Sidebar
