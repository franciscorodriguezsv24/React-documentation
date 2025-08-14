import { CodeContainer } from '../../components/codeContainer'
import './useContext.css'

export const UseContext = () => {
  return (
        <div className='useContext_container'>
          <h1 className='useContext_title'>
            UseContext
          </h1>
          <p className='useContext_p'>
            Es una hook de react que permite a los componentes incorporarse al contexto de react, este provee una forma de pasar data debajo un arbol de componentes sin tener que pasar las props explicitamente en cada nivel. 
          </p>
          <p className='useContext_p'>
            <b>Provider:</b>{' '}
            Este es un componente que es parte de React Context API. Su proposito es hacer que la data o el estado disponible a todos lops componentes descendientes dentro de una parte especifica del arbol, sin la necesidad de pasarlos de manera explicita en los componentes del arbol. para evitar un prop drilling.
          </p>

          <p className='useContext_p'>
            Como funciona?
          </p>

                    <p className='useContext_p'>
            <b>create context :</b>{' '}
            Primero un objeto contexto es creado usando createContext(). Este objeto contendra al provider component
          </p>

                    <p className='useContext_p'>
            <b>Wrap components:</b>{' '}
            EL provider component se utiliza para encapsular los componentes que necesitaran acceso a la data compartida
          </p>

                    <p className='useContext_p'>
            <b>Provide value:</b>{' '}
            El provider component acepta la value prop, el cual es la data o estado que sera creado para estar disponible para los descendientes.
          </p>

                    <p className='useContext_p'>
            <b>consume context:</b>{' '}
            Los componentes descendientespueden tener acceso a los valores proveidos usando el hook useContext.
          </p>
          <CodeContainer>
            <pre>
              <code>
            {`// 1. Create a context
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light'); // Default value is 'light'

// 2. Create a Provider component
function ThemeProvider({ children }) {
  const theme = 'dark'; // Or dynamically determined state

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create a component that consumes the context
function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' 
    ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      My Themed Button
    </button>
  );
}

// 4. Use the Provider in your application
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
      {/* Other components that might need the theme */}
    </ThemeProvider>
  );
}

export default App;
`}
              </code>
            </pre>
          </CodeContainer>
    
        </div>
  )
}
