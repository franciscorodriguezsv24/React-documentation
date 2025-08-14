import { CodeContainer } from '../../components/codeContainer'
import './useImperativeHandle.css'

export const UseImperativeHandle = () => {
  return (
                  <div className='useImperativeHandle_container'>
                    <h1 className='useImperativeHandle_title'>
                      UseImperativeHandle
                    </h1>
                    <p className='useImperativeHandle_p'>
                      Es un hook de react que permite customizar los valores de las intancias que es expuesta cuando se usa Ref con forwardRef
                    </p>
          
                    <CodeContainer>
                      <pre>
                        <code>
                      {`useImperativeHandle(ref, createHandle, [deps]);`}
                        </code>
                      </pre>
                    </CodeContainer>
                    <p className='useImperativeHandle_p'>
                      <b>ref:</b>{' '}
                      el Ref pasa tu componenten a travez de forwardRef
                    </p>
                    <p className='useImperativeHandle_p'>
                      <b>createHandle:</b>{' '}
                      Una funcion que retorna el objeto que quieres exponer al padre
                    </p>
                    <p className='useImperativeHandle_p'>
                      <b>deps:</b>{' '}
                      Dependencias de array para controlar cunado el handle esta actualizado.
                    </p>

                     <CodeContainer>
                      <pre>
                        <code>
                      {`import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />;
});

function ParentComponent() {
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}`}
                        </code>
                      </pre>
                    </CodeContainer>
                    <p className='useImperativeHandle_p'>
                      En este caso el componente padre puede llamar al inputRef.current.focus() aunque inputRef no este apuntando directamente al elemento del DOM este esta usando el imperative handle en su lugar 
                    </p>
                  </div>
  )
}

