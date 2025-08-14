import { CodeContainer } from '../../components/codeContainer'
import './useTransition.css'

export const UseTransition = () => {
  return (
          <div className='useTransition_container'>
            <h1 className='useTransition_title'>
              useTransition
            </h1>
            <p className='useTransition_p'>
              Este es un hook que viene de Framer motion library para React, usado para crear una nueva motion value que transforma el outout de uno o varios motion values, es particularmente usado para crear animaciones complejas e interconectadas donde un progreso de animacion o valor dicta a otro.
            </p>
  
            <CodeContainer>
              <pre>
                <code>
              {`import React from "react";
    import { motion, useMotionValue, useTransform } from "framer-motion";

    export default function App() {
      const rotation = useMotionValue(0); // A motion value for rotation

      // Create a new motion value that doubles the rotation
      const doubledRotation = useTransform(() => rotation.get() * 2); 

      return (
        <motion.div
          style={{ rotate: doubledRotation, width: 100, height: 100, backgroundColor: "green" }}
          animate={{ rotate: 360 }} // Animate the original rotation
          transition={{ duration: 2, repeat: Infinity }}
        />
      );
    }
  `}
                </code>
              </pre>
            </CodeContainer>
            <p className='useTransition_p'>
              Aca en este ejemplo doubleRotation es un nuevo motion value que siempre refleja 2 valores de rotacion, cuando la animacion rota, doubleRotation anima acordemente, resultando en una rotation rapida. para el elemento. 
            </p>
          </div>
  )
}
