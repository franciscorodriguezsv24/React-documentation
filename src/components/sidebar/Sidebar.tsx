import { Link, useLocation } from 'react-router'
import './sidebar.css'

type SidebarContent = {
    url: string,
    name: string,
    id: number
}
export const Sidebar = ({ nav }: { nav: SidebarContent[] }) => {
  const location = useLocation();
  const currentPath = location.pathname

  return (
    <div>
      <h2>
        UseHooks
      </h2>
      <div className='navContainer'>
        {
          nav.map((item) => {
            return (
                <Link to={item.url ?? "#"} className={` ${currentPath === item.url ? 'selectedLinkTo' : 'linkTo'} `} key={item.id}>
                    {item.name ? item.name: "hopping"}
                </Link>
            )
          })
        }
      </div>

    </div>
  )
}
