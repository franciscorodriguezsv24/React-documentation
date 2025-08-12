// import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css' 
import { Sidebar } from './components/sidebar'

function Layout() {
  // const [count, setCount] = useState(0)

  const data = [
    {
      url: '/useEffect',
      name: 'useEffect'
    },
    {
      url: '/useState',
      name: 'useState'
    },
    {
      url: '/useRef',
      name: 'useRef'
    },
    {
      url: '/useId',
      name: 'useId'
    },
    {
      url: '/useReducer',
      name: 'useReducer'
    },
    {
      url: '/useCallback',
      name: 'useCallback'
    },
    {
      url: 'UseContext',
      name: 'useContext'
    },
    {
      url:'/useLayoutEffect',
      name: 'useLayoutEffect'
    },
    {
      url:'/useImperativeHandle',
      name: 'useImperativeHandle'
    },
    {
      url:'/useSyncExternalStore',
      name: 'useSyncExternalStore'
    },
    {
      url: '/use',
      name: 'use'
    },
    {
      url: '/useTransition',
      name: 'useTransition'
    },
    {
      url: '/useOptimistic',
      name: 'useOptimistic'
    },
    {
      url: '/useFormStatus',
      name: 'useFormStatus'
    },
    {
      url: '/useDeferedValue',
      name: 'useDeferedValue'
    },
    {
      url: '/useMemo',
      name: 'useMemo'
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
