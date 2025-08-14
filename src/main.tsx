import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout.tsx'
import { UseEffect } from './page/useEffect/UseEffect.tsx'
import { UseRef } from './page/useRef/UseRef.tsx'
import { UseState } from './page/useState/UseState.tsx'
import { UseId } from './page/useId/UserId.tsx'
import { UseReducer } from './page/useReducer/UseReducer.tsx'
import { UseCallback } from './page/useCallback/UseCallback.tsx'
import { UseContext } from './page/useContext/UseContext.tsx'
import { UseLayoutEffect } from './page/useLayoutEffect/UseLayoutEffect.tsx'
import { UseImperativeHandle } from './page/useImperativeHandle/UseImperativeHandle.tsx'
import { UseSyncExternalStore } from './page/useSyncExternalStore/UseSyncExternalStore.tsx'
import { Use } from './page/use/Use.tsx'
import { UseTransition } from './page/useTransition/UseTransition.tsx'
import { UseOptimistic } from './page/useOptimistic/UseOptimistic.tsx'
import { UseFormStatus } from './page/useFormStatus/UserFormStatus.tsx'
import { UseDeferedValue } from './page/useDeferedValue/UseDerefedValue.tsx'
import { UseMemo } from './page/useMemo/UseMemo.tsx'
import { Home } from './page/home/index.tsx'
import { NotFound } from './page/notFound/NotFound.tsx'


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
