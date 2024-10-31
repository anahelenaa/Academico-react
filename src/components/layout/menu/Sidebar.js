import React, { Fragment } from 'react'
import itens from './SidebarData';
import './sidebar.css';
import ShowItens from './ShowItens';

const Sidebar = ({ toggle }) => {
  return (
    <Fragment>
        <div className= {toggle ? 'app-sidebar active' : 'app-sidebar'}>
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
