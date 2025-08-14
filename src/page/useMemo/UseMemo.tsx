import './useMemo.css'
import { CodeContainer } from '../../components/codeContainer'

export const UseMemo = () => {
  return (
                  <div className='useMemo_container'>
                    <h1 className='useMemo_title'>
                      useMemo
                    </h1>
                    <p className='useMemo_p'>
                      Este es un componente de react que memoriza (cachea) el resultado de una computacion, este prevee una calculacion excesiva desde ser enviado en casa re-render de un componente a menos que cambien sus dependencias. Este puede aumentar significativamente la performance en la aplicacion con operaciones computacionales intensivas.
                    </p>
                    <p className='useMemo_p'>
                      useMemo toma 2 argumentos:
                    </p>
                    <p className='useMemo_p'>
                      <b>una funcion:</b>{' '}
                      Esta funcion realiza el calculo costoso y regresa un valor que es memorizado.
                    </p>
                    <p className='useMemo_p'>
                      <b>an array of dependencies :</b>{'  '}
                      Este contiene el valor que nosotros cambiamos este llamara una nueva ejecucion de una function y re-momorizara el resultado. 
                    </p>
          
                    <CodeContainer>
                      <pre>
                        <code>
                      {`import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 28 },
];

function UserList() {
  const [filterText, setFilterText] = useState('');

  // Without useMemo, filteredUsers would be recalculated on every render
  // const filteredUsers = users.filter(user =>
  //   user.name.toLowerCase().includes(filterText.toLowerCase())
  // );

  // With useMemo, filteredUsers is only recalculated when filterText changes
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...'); // This will only log when filterText changes
    return users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText]); // Dependency array: re-run when filterText changes

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} ({user.age})</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;`}
                        </code>
                      </pre>
                    </CodeContainer>
                    <p className='useMemo_p'>
                        En este ejemplo el arreglo de filteredUser es derivado de el arreglo de users y el estado del filter text.La operacion de filtrado puede ser excesiva, especialmente con un array de users extenso.
                    </p>
                  </div>
  )
}
