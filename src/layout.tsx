// import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css' 
import { Sidebar } from './components/sidebar/Sidebar'

function Layout() {
  // const [count, setCount] = useState(0)

  const data = [
    {
      url: '/useEffect',
      name: 'useEffect',
      id: 1
    },
    {
      url: '/useState',
      name: 'useState',
      id: 2
    },
    {
      url: '/useRef',
      name: 'useRef',
      id: 3
    },
    {
      url: '/useId',
      name: 'useId',
      id:4
    },
    {
      url: '/useReducer',
      name: 'useReducer',
      id:5
    },
    {
      url: '/useCallback',
      name: 'useCallback',
      id:6
    },
    {
      url: 'UseContext',
      name: 'useContext',
      id:7
    },
    {
      url:'/useLayoutEffect',
      name: 'useLayoutEffect',
      id: 8
    },
    {
      url:'/useImperativeHandle',
      name: 'useImperativeHandle',
      id: 9

    },
    {
      url:'/useSyncExternalStore',
      name: 'useSyncExternalStore',
      id: 10

    },
    {
      url: '/use',
      name: 'use',
      id: 11
    },
    {
      url: '/useTransition',
      name: 'useTransition',
      id: 12
    },
    {
      url: '/useOptimistic',
      name: 'useOptimistic',
      id: 13
    },
    {
      url: '/useFormStatus',
      name: 'useFormStatus',
      id:14
    },
    {
      url: '/useDeferedValue',
      name: 'useDeferedValue',
      id:15
    },
    {
      url: '/useMemo',
      name: 'useMemo',
      id:16
    }

  ]
  return (
    <div className='container'>
      <div className='sidebarContent'>
        <Sidebar nav={data}/>
      </div>
      <div className='contentContainer'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
