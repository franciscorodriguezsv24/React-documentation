import './useFormStatus.css'
export const UseFormStatus = () => {
  return (
        <div className='useFormStatus_container'>
          <h1 className='useFormStatus_title'>
            useFormStatus
          </h1>
          <p className='useFormStatus_p'>
            Este es un hook que provee la informacion de estatus sobre la ultima submission, Este esta diseniado para ser usado dentro del componente que es renderizado como hijo dentro del elemento form.
          </p>
          <p className='useFormStatus_p'>
            <b>Pending:</b>
            <br/>
            Envia un booleano como valor que indica si el padre {`<form/>`} esta actualmente dentro del proceso de enviar la data o enviando la data, este esta particularmente creado para presentar indicadores de carga o desabiltar el bottom de submit
          </p>
                    <p className='useFormStatus_p'>
            <b>Data:</b>
            <br/>
            Provee un objeto que implementa la interface de formData, contenienddo la data que sera enviada a travez del form
          </p>
                    <p className='useFormStatus_p'>
            <b>Method:</b>
            <br/>
            es donde se le asigna el metodo http que se usara.

          </p>
                    <p className='useFormStatus_p'>
            <b>Action:</b>
            <br/>
            una referencia de la funcion pasada a la accion prop en el padre {`<form>`}
          </p>
    
        </div>
  )
}
