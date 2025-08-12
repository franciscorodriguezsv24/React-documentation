import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout.tsx'
import { UseEffect } from './page/useEffect'
import { UseRef } from './page/useRef'
import { UseState } from './page/useState/index.tsx'
import { UseId } from './page/useId'
import { UseReducer } from './page/useReducer/index.tsx'
import { UseCallback } from './page/useCallback/index.tsx'
import { UseContext } from './page/useContext/index.tsx'
import { UseLayoutEffect } from './page/useLayoutEffect/index.tsx'
import { UseImperativeHandle } from './page/useImperativeHandle/index.tsx'
import { UseSyncExternalStore } from './page/useSyncExternalStore/index.tsx'
import { Use } from './page/use/index.tsx'
import { UseTransition } from './page/useTransition/index.tsx'
import { UseOptimistic } from './page/useOptimistic/index.tsx'
import { UseFormStatus } from './page/useFormStatus/index.tsx'
import { UseDeferedValue } from './page/useDeferedValue/index.tsx'
import { UseMemo } from './page/useMemo/index.tsx'
import { Home } from './page/home/index.tsx'
import { NotFound } from './page/notFound/index.tsx'


const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'useEffect',
            element: <UseEffect/>
          },
          {
            path: 'useRef',
            element: <UseRef />,
          },
          {
            path: 'useState',
            element: <UseState />,
          },
                    {
            path: 'useId',
            element: <UseId />,
          },
                    {
            path: 'useReducer',
            element: <UseReducer />,
          },
                    {
            path: 'useCallback',
            element: <UseCallback />,
          },
                    {
            path: 'useContext',
            element: <UseContext />,
          },
          {
            path: 'useLayoutEffect',
            element: <UseLayoutEffect />,
          },
          {
            path: 'useImperativeHandle',
            element: <UseImperativeHandle />,
          },
                    {
            path: 'useSyncExternalStore',
            element: <UseSyncExternalStore />,
          },
          {
            path: 'use',
            element: <Use/>
          },
          {
            path: 'useTransition',
            element: <UseTransition/>
          },
          {
            path: 'useOptimistic',
            element: <UseOptimistic/>
          },
          {
            path: 'useFormStatus',
            element: <UseFormStatus/>
          },
          {
            path: 'useDeferedValue',
            element: <UseDeferedValue/>
          },
          {
            path: 'useMemo',
            element: <UseMemo/>
          },
          {
            path: '*',
            element: <NotFound/>
          }
        ],
      },
    ]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
