import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ReactIconMati from "../assets/romati.jpg"
import ReactIconJaz from "../assets/rojaz.jpg"
import Image from 'react-bootstrap/Image'

export default function MatiComponent(props) {
    const [cantDeSaludos, setCantDeSaludos] = useState(0);
    
    const { config, saludo } = props;
    const { name, colour } = config;
    
    return (
        <div>
            <h1>Component {name}</h1>
            <Image src={ReactIconMati} rounded={true} fluid={true} width='150px'/>
            
            <Button onClick={() => {saludo(name); setCantDeSaludos(cantDeSaludos+1);}}>saludar</Button>
            <h3>Cantidad de saludos: {cantDeSaludos}</h3>
            <article>{props.children}</article>
            <hr/>
            <JazComponent {...props}/>
        </div>
    );
}

export function JazComponent(props) {
    const [cantDeSaludosDeJaz, setCantDeSaludosDeJaz] = useState(0);
    return (
        <>
            <h1>Component Jaz hermana de {props.config.name} </h1>
            <Image src={ReactIconJaz} rounded={true} fluid={true} width='150px'/>
            <Button variant="outline-danger" onClick={() => {props.saludo('jaz'); setCantDeSaludosDeJaz(cantDeSaludosDeJaz+1);}}>saludar</Button>
            <h3>Cantidad de saludos: {cantDeSaludosDeJaz}</h3>
            <article>{props.children}</article>
        </>
    );
}