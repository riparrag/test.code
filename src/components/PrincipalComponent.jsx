import React, {useEffect, useState} from 'react'
import MatiComponent from './MatiComponent.jsx'
import MacaComponent from './MacaComponent.tsx';
import ClassComponent from './ClassComponent.tsx'
const PrincipalComponent = props => {

    const [contador, setContador] = useState(0);

    const principalConfig = {
        name: 'Mati Pro',
        colour: 'blue'
    };

    const saludar = (name) => {
        console.log(`hola, soy ${name}`);
    }
    const maca = { nombre:'Ma-k', apellido: 'semino' };

    useEffect(() => {
      /*setInterval(()=>{
        setContador(contador+1);
      },1000);*/
      setContador(111);
      console.log('PrincipalComponent', contador);
    })

    return (
        <>
            <h3>Version {props.version}</h3>
            <hr/>
            <MatiComponent config={principalConfig} saludo={saludar}>
                <p>son of mati</p>
            </MatiComponent>
            <hr/>
            <MacaComponent maca={maca}/>
            <hr/>
            <ClassComponent consumer="Principal" counter={contador}/>
            <hr/>
        </>
    )
}

PrincipalComponent.propTypes = {}

export default PrincipalComponent