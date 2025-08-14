import { CodeContainer } from "../../components/codeContainer"
import './useCallback.css'
export const UseCallback = () => {
  return (
        <div className='useCallback_Container'>
          <h1 className='useCallback_title'>
            UseCallback
          </h1>
          <p className='useCallback_p'>
            Este es un hook que retorna una version memorizada de una callback function, esto significa que la funcion sera solamente recreada si una de las dependencias cambia, Esta es primordialmente para optimizar la performance en las aplicaciones react, particularmente cuando pasamos funciones como props a los componentes hijos que son memorizados con React.memo
          </p>
          <CodeContainer>
            <pre>
              <code>
            {`const memoizedCallback = useCallback(
  () => {
    // Your function logic here
  },
  [dependency1, dependency2] // Dependency array
);`}
              </code>
            </pre>
          </CodeContainer>
          <p className='useCallback_p'>
            * El primer argumento es la funcion que queres memorizar
          <br/>
          * El segundo argumento es un array de dependencias, la funcion memorizada solamente sera recreada si cualquiera de las dependencias cambia, si el array esta vacioi, la funcion solamente se creara una vez. 
          <br/>
          <br/>
          Si bien useCallback es muy importante para mejorar el performance de cualquier app web, es importante tener en cuenta que una vez se le aplique a una funcion, este congelara todos lo que se renderizo la primera vez, eso incluye todos los datos que esten adentro de el, por eso useCallback deberia usarse solo en funciones que no este mutando un valor como tal. 
          <br/>
          Tener en cuenta que con la dependencys haremos que si se logre actualizat siempre y cuando la dependencia se actualice.
          </p> 
    
        </div>
  )
}
