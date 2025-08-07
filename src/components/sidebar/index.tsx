import React from 'react'
import { Link } from 'react-router'
import './sidebar.css'

type SidebarContent = {
    url: string,
    name: string,
}
export const Sidebar = ({ nav }: { nav: SidebarContent[] }) => {
  return (
    <div>
      <h2>
        UseHooks
      </h2>
      <div className='navContainer'>
        {
          nav.map((item, index) => {
            return (
                <Link to={item.url ? item.url : "#"} className='linkTo' key={index}>
                    {item.name ? item.name: "hopping"}
                </Link>
            )
          })
        }
      </div>

    </div>
  )
}
