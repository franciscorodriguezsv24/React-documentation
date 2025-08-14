import { CodeContainer } from '../../components/codeContainer'
import './useOptimistic.css'

export const UseOptimistic = () => {
  return (
            <div className='useTransition_container'>
              <h1 className='useTransition_title'>
                useOptimistic
              </h1>
              <p className='useTransition_p'>
                Este es un hook de react que permite hacer actualzaciones optimistas a la ui, esto permite que la interfaz de usuario espera la respuesta de una accion asynchronous inmediatamente, incluso antes de recibir la confirmacion desde el servidor, Este hook provee mas responsividad y una experiencia de usuario perfecta como el usuario no tiene que esperar por conexion para completar antes de ver el resultado de su accion.
              </p>
    
              <CodeContainer>
                <pre>
                  <code>
                {`import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // merge and return new state
      // with optimistic value
    }
  );
}
    `}
                  </code>
                </pre>
              </CodeContainer>
              <p className='useTransition_p'>
                por ejemplo cunado un usuario escribe un mensaje dentro del form y enviar el mensaje a travez del botton enviar, el optimisitci hook permite que el mensaje inmediatamente aparezca 

              </p>
            </div>
  )
}
