import React from 'react'
import { CodeContainer } from '../../components/codeContainer'
import './useReducer.css'

export const UseReducer = () => {
  return (
          <div className='useReducer_container'>
            <h1 className='useReducer_title'>
              UseReducer
            </h1>
            <p className='useReducer_p'>
              Es una alternativa a useState para manejar state en componentes funcionales, particularmente usados para mas logica de estado compleja, este esta inspirado por el patron de Redux y ofrece una forma estructurada para manejar actualizaciones de estado. 
            </p>
  
            <CodeContainer>
              <pre>
                <code>
              {`import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducerTesting(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,// copiado el ultimo estado
        count: hasError ? state.count : newCount, //luego lo edita
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimun reached" : null,
      };
    }
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducerTesting, {
    count: 0,
    error: null,
  });

  return (
    <div className="tutorial">
      <div>Count: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
//make a todo list to practice and use useReducer
  `}
                </code>
              </pre>
            </CodeContainer>
            <p className='useReducer_p'>
              Y la mejor practica para hacerlo es utilizando dentro de su funcion el patron de switch para poder tener un mejor control de las actions.
            </p>
      
          </div>
  )
}
