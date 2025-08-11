import React from 'react'
import { CodeContainer } from '../../components/codeContainer'

export const UseLayoutEffect = () => {
  return (
              <div className='useReducer_container'>
                <h1 className='useReducer_title'>
                  useLayoutEffect
                </h1>
                <p className='useReducer_p'>
                  Es un hook de react que trabaja similar a useEffect, pero con una diferencia, este se activa sincronicamente despues de todas las mutaciones del DOM perooo antes de que el buscador vuelva a pintar, esto se vuelve util cuando necesites leer el disenio o aplicar los cambios visuales en el DOM antes de que el buscador pinte la pantalla (o renderice la pagina)
                </p>
      
                <CodeContainer>
                  <pre>
                    <code>
                  {`import React, { useRef, useState, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button>Mostrar Tooltip</button>
      <div style={{
        position: 'absolute',
        top: 'tooltipHeight', // Posiciona el tooltip arriba del botón
        left: '0',
        backgroundColor: 'black',
        color: 'white',
        padding: '5px',
      }}>
        Este es el tooltip
      </div>
    </div>
  );
}
      `}
                    </code>
                  </pre>
                </CodeContainer>
              </div>
  )
}
