import { CodeContainer } from '../../components/codeContainer'
import './useSyncExternalStore.css'
export const UseSyncExternalStore = () => {
  return (
    <div className='useSync_container'>
      <h1 className='useSync_title'>
        useSyncExternalStore
      </h1>
      <p className='useSync_p'>
        Este es un hook de react, implementado en la version 18, este permite a los componentes de react a suscribirse a fuentes de datos externas y asegurar consistencia, especialmente en el contexto del renderizado actual. Este esta diseniado para situaciones donde tus componentes de react necesiten leer y estar actualizador con data que vive afuera de react tipicamente los state management, pueden ser 
      </p>
      <ul>
        <li className='useSync_p'>browsers api (localstorage, sessionStorage, navigator.onLine)</li>
        <li className='useSync_p'>Stores globales o estructuras de data mutable que no es manejada por un useState o useReducer. </li>
        <li className='useSync_p'>Librerias de terceros como Redux o zustand</li>
      </ul>
      <p className='useSync_p'>
        Tambien podemos decir que este hook nos ayuda a que nuestras aplicaciones no se fragmenten si llega a sapar algo
      </p>
      <p className='useSync_p'>
        Como funciona? 
      </p>
      <p className='useSync_p'>
        <b>Subscribe function:</b>{' '}
        Esta function debe suscribirse al external store y regresar un funcion limpia que se desuscriba, este es responsable de notificar a React cuando un dato externo cambio.
      </p>
      <p className='useSync_p'>
        <b>getSnapshot function:</b>{'  '}
        Esta funcion debe leer el snapshot de la data de su store externo, React usara esto para traer el valor actual a renderizar
      </p>
      <p className='useSync_p'>
        <b>getServerSnapshot function:</b>{'  '}
        Esta funcion es usada para el SSR (server side rendering) para proveer un snapshot inicial de data en el server
      </p>

      <CodeContainer>
        <pre>
          <code>
                          {`import { useSyncExternalStore } from "react";

// Function to subscribe to changes in the external store (navigator.onLine)
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

// Function to get the current snapshot of the external store
function getSnapshot() {
  return navigator.onLine;
}

// Optional: Function to get the initial snapshot for server-side rendering (SSR)
// In this case, we can assume online for SSR or handle it based on environment
function getServerSnapshot() {
  return true; // Or handle based on server environment
}

function App() {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return <div>Network Status: {isOnline ? "Online" : "Offline"}</div>;
}

export default App;`}
            </code>
          </pre>
        </CodeContainer>
        <p className='useSync_p'>
            En pocas palabras podemos decir que este hook funciona para verificar el cambio del estado de las librerias externas, es bueno usarlo siempre y cuando sea para conenctarse a elementos que no son manejables con React. pero si lo podemos manejar, es mejor no hacerlo. 
        </p>
      </div>
    
  )
}
