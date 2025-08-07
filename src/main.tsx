import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout.tsx'
import { UseEffect } from './page/useEffect'
import { UseRef } from './page/useRef'
import { UseState } from './page/useState.tsx'
import { UseId } from './page/useId'
import { UseReducer } from './page/useReducer.tsx'
import { UseCallback } from './page/useCallback.tsx'
import { UseContext } from './page/useContext.tsx'
import { UseLayoutEffect } from './page/useLayoutEffect.tsx'
import { UseImperativeHandle } from './page/useImperativeHandle.tsx'
import { UseSyncExternalStore } from './page/useSyncExternalStore.tsx'


const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <UseEffect />,
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
        ],
      },
    ]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
