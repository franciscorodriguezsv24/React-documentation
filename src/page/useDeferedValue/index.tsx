import { CodeContainer } from '../../components/codeContainer'

export const UseDeferedValue = () => {
  return (
        <div className='useEffectMainContainer'>
          <h1 className='useEffectTitle'>
            useDeferredValue
          </h1>
          <p className='useEffectP'>
            Este es un componenete de react que permite defer el renderizado de un valor efectivamente, priorizando actualizaciones de UI  sobre otras, esta fue agregafda en react 18 como parte de el current rendering model 
          </p>
          <p className='useEffectP'>
            Su principal proposito es mantener la interface de usuario responsive, especialmente en escenarios donde un valor cambie frecuentemente y triggeree bastantes re-renderes, en lugar de actualizar la ui en cada cambio, useDeredValue, nos permite aplazar el render de las partes menos criticas de la UI hasta que el browser tenga tiempo libre, asugurandonos que la gran interseccion de propiedades se mantengan fluidas.
          </p>
          <CodeContainer>
            <pre>
              <code>
            {`const deferredValue = useDeferredValue(value);`}
              </code>
            </pre>
          </CodeContainer>
          <p className='useEffectP'>
            Value: El valor actual que queremos aplazar
          </p> 
          <p className='useEffectP'>
            deferedValue: La version diferida de la version original, el cual actualiza en una prioridad de render baja. 
          </p> 
    
        </div>
  )
}
