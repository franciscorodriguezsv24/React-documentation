import { CodeContainer } from '../../components/codeContainer';
import './use.css';

export const Use = () => {
  return (
    <div className='use_Container'>
      <h1 className='use_title'>
        Use
      </h1>
      <p className='use_p'>
        use es una react Api que permite leer los valores de un resultado como Promis o Context. Al contrario de react hooks, use puede ser llamado dentro del loop y declaraciones condicionales como if.  como react hook, la funciona que llama use debe ser un componenten o hook 
      </p>
      <p className='use_p'>
        <b>cuando llamamos con una promise, el use API integra suspense y error boundaries. El componente llama use suspends mientras la promesa paso a use a pending, si el componente que lllama use esta dentro del suspence boundary, la fallback sera mostrada, una vez la promise se cumpla, el susponse fallbackl es remplazado por el componente renderizado usando la data retornada por el usuario use API. si la promesa passo al use es rechazada, el fallback de error boundary mas cercano se mostrara.</b>
      </p>
      <CodeContainer>
        <pre>
          <code>
        {`import { use } from 'react';

export function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}`}
          </code>
        </pre>
      </CodeContainer>
      <p className='use_p'>
        En este se crea la funcion que se llamara luego ⬆️
      </p> 
      <CodeContainer>
        <pre>
          <code>
        {`import { fetchMessage } from './lib.js';
import { Message } from './message.js';

export default function App() {
  const messagePromise = fetchMessage();
  return (
    <Suspense fallback={<p>waiting for message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}
`}
          </code>
        </pre>
      </CodeContainer>
    </div>
)
}
