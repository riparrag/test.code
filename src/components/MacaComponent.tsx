import React, { useRef } from 'react'

interface MacaDTO {
  nombre: string,
  apellido: string,
  edad: number,
  propiedades: Array<string>
}

interface PropsMacaComponent {
  maca: MacaDTO
}

const MacaComponent : React.FC<PropsMacaComponent> = (props: PropsMacaComponent) => {
  const algoRef = useRef();

  const {maca} = props;
  maca.propiedades = ['es','un','amor'];
  
  const Titulo = (props) => <h1>MacaComponent {maca.nombre} {maca.apellido}</h1>

  return (
    <>
      <Titulo/>
      <label htmlFor='id1'>Esto es algo:</label>
      <textarea id='id1' name='algo' placeholder='algo a' ref={algoRef}>
        text area
      </textarea>
      <h3>{maca.edad}</h3>
      {
        maca?.propiedades?.length > 0 &&
          <ul>
            {
              maca.propiedades.map((p,index) => <li key={index}>{p}</li>)
            }
          </ul>
      }
    </>
  )
}

export default MacaComponent;