import React from 'react'
import PropTypes from 'prop-types'
import MatiComponent from './MatiComponent'

const PrincipalComponent = props => {

    const principalConfig = {
        name: 'Mati Pro',
        colour: 'blue'
    };

    const saludar = (name) => {
        console.log(`hola, soy ${name}`);
    }

    return (
        <>
            <h3>Version {props.version}</h3>
            <MatiComponent config={principalConfig} saludo={saludar}/>
        </>
    )
}

PrincipalComponent.propTypes = {}

export default PrincipalComponent