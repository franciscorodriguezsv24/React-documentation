import React from 'react'
import './useEffect.css'
import { CodeContainer } from '../../components/codeContainer'

export const UseEffect = () => {
  return (
    <div className='useEffectMainContainer'>
      <h1 className='useEffectTitle'>
        UseEffect
      </h1>
      <p className='useEffectP'>
        Este es un hook de react que permite correr tu codigo despues de que el componente se ha renderizado, usualmente para manejar los side Effects como Fetching Data, actualizar el dom, settear subscripciones o contadores. 
      </p>
      <p className='useEffectP'>
        <b>tenemos 2 tipos de de useEffect </b>
      </p>
      <CodeContainer>
        <pre>
          <code>
        {`useEffect(() => {
          console.log("The component was rendered or updated");
});`}
          </code>
        </pre>
      </CodeContainer>
      <p className='useEffectP'>
        Este corre siempre que el componente se renderiza ⬆️
      </p> 
      <CodeContainer>
        <pre>
          <code>
        {`useEffect(() => {
  console.log("Runs only when 'count' changes");
}, [count]);`}
          </code>
        </pre>
      </CodeContainer>
      <p className='useEffectP'>
        Este se renderiza siempre y cuando Count cambie o reciba alguna actualizacion. 
      </p> 

    </div>
  )
}
