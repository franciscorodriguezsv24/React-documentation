import { CodeContainer } from "../../components/codeContainer"
import './useState.css'

export const UseState = () => {
  return (
        <div className='useState_container'>
          <h1 className='useState_title'>
            UseState
          </h1>
          <p className='useState_p'>
            Este permite a los functional components administrarlos y actualizar el estado interno. Este provee una manera de declarar variables de estado que mantienen informacion que puede cambiar en el tiempo dentro de un componente. 
          </p>

          <CodeContainer>
            <pre>
              <code>
            {`import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and its setter 'setCount', initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1); // Update the state using the setter function
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
`}
              </code>
            </pre>
          </CodeContainer>
    
        </div>
  )
}
