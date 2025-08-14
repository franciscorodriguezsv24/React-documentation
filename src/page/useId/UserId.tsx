import { CodeContainer } from '../../components/codeContainer'

export const UseId = () => {
  return (
        <div className='useEffectMainContainer'>
          <h1 className='useEffectTitle'>
            useId
          </h1>
          <p className='useEffectP'>
            Este es un hook primordialmente usado para generar ids unicos que sean estables a travez del server y el client render, esta estabilidad es crucial para evitar el desajuste de la hidratacion cuando usemos server-side-rendering
          </p>
          <CodeContainer>
            <pre>
              <code>
              {`import { useId } from 'react';
function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label htmlFor={\`password-input-\${passwordHintId}\`}>Password</label>
      <input
        type="password"
        id={\`password-input-\${passwordHintId}\`}
        aria-describedby={\`password-hint-\${passwordHintId}\`}
      />
      <p id={\`password-hint-\${passwordHintId}\`}>
        Your password must be at least 8 characters long.
      </p>
    </>
  );
}`}
              </code>
            </pre>
          </CodeContainer>
    
        </div>
  )
}
