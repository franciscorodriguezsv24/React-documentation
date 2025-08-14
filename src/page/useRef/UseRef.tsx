import { useRef } from 'react'
import { CodeContainer } from '../../components/codeContainer'
import './useRef.css'

export const UseRef = () => {
const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='useRefMainContainer'>
          <h1 className='useRefTitle'>
            useRef
          </h1>
          <p className='useRefP'>
            Este es un hook incorporado en react que provee una forma de persistir los valores mutables a travez de los componentes renderizables sin causar que el componente se re renderize cuando estos valores son actualizados parte de sus caracteristicas es que sus valores persistan, no llama renderizados a la hora de mutar, retorna un objecto mutable, se puede agregar o settear un valor inicial, 

            el mayor uso que se le da al useRef es para acceder a elementos del dom directamente (enfocado en inputs fields measuring dimensions), settear valores de tiempo o event handlers o otros valores que necesitas que persistan a pesar de los re-redenders, manejar valores previos, almacenando el dato anterior a la mutacion. 
          </p>
          <CodeContainer>
            <pre>
              <code>
            {`import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
              </code>
            </pre>
          </CodeContainer>
          <p className='useRefP'>
            Es importante recalcar que este hook no se renderiza nuevamente, lo que significa que debemos tener cuidado a la hora de implementarlo en ui pensando que tiene el mismo funcionamiento que un useState
          </p> 
          <p className='useRefP'>
            <b>
              Dependencies 
            </b>
          </p>
          <p className='useRefP'>
            Estos son paquetes requeridos por la aplicacion para correr en un ambiente de produccion entre los ejemplos se incluye: React, React-dom y la enrutadora librerias como react-router-dom
          </p> 
          <p className='useRefP'>
            <b>
              Primitive dependencies 
            </b>
          </p>
          <p className='useRefP'>
            Estas ser refieren a el uso de valores primitivos de JS dentro de una array dependiente de react hooks, especialmente useEffect y useCallback
          </p> 

          <p className='useRefExample'><b>Ejemplo</b></p>
          <div className='useRefExampleContainer'>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
          </div>

        </div>
      )
    }