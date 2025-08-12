import './home.css'

export const Home = () => {
  return (
        <div className='useHook_container'>
            <h1 className='useHook_title'>
                useHooks
            </h1>
            <p className='useHook_p'>
                Bienvenido/a a esta guía práctica de React Hooks.
                Los hooks son una de las funcionalidades más importantes introducidas en React a partir de la versión 16.8.
                Su propósito principal es permitirnos usar estado, manejar efectos y acceder a otras características internas de React directamente desde componentes funcionales, evitando la necesidad de clases.

                En esta documentación encontrarás una explicación clara, organizada y enfocada exclusivamente en hooks, sin distracciones ni temas ajenos. El objetivo es que puedas comprender cómo funcionan, para qué sirven y cómo aplicarlos correctamente en tus proyectos.

                Queremos enfatizar que esta guía no reemplaza la documentación oficial de React, que es la fuente más completa, actualizada y con mayor profundidad técnica.
                Nuestro propósito es ofrecerte un recurso de consulta rápida y práctica, ideal para:
            </p>
            <ul>
                <li className='useHook_p'>Comprender la lógica detrás de cada hook.</li>
                <li className='useHook_p'>Revisar ejemplos sencillos y funcionales.</li>
                <li className='useHook_p'>Conocer buenas prácticas y patrones comunes.</li>
                <li className='useHook_p'>Evitar errores típicos al usarlos.</li>

            </ul>
        </div>
  )
}
