import React, {Component, useEffect} from 'react'
//import PropTypes from 'prop-types';

interface MyState {
    consumer: string;
    counter: number;
    algo: string;
    moves: Array<any>
}

class ClassComponent extends Component<MyState, MyState> {

    /*static propTypes = {
        habla : PropTypes.string.isRequired
    }*/

    constructor(props) {
        super(props);
        this.initializeState(props);
        console.log('constructor');
    }

    componentDidUpdate(prevProps: Readonly<MyState>, prevState: Readonly<MyState>, snapshot?: any): void {
        console.log('componentDidUpdate')
    }

    initializeState(props: MyState) {
        this.state = {...props, algo: 'algo inicial'};
        //setInterval( this.forwardCounter, 1000 );
    }

    forwardCounter = () => {
        this.setState({
            consumer: this.state.consumer + this.state.counter,
            counter: this.state.counter + 1,
            algo: 'cambio'
        });
        console.log('forwardCounter');
    }

    handleMouseOver = (e) => {
        console.log(e.clientX, e.clientY);
    }

    handleClick = (e) => {
        this.setState({algo:'cambiado'})
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount');
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('componentDidCatch');
    }

    /*useEffect(() => {
        this.setState({algo:'en useEffect'})M
    });*/

    componentDidMount(): void {
        console.log('componentDidMount scroll', window.scrollY);
        this.setState({algo:'si! componentDidMount'});
        document.addEventListener('scroll', () => {
            console.log('scroll', window.scrollY);
            this.setState({algo:'scroll'+window.scrollY});
        });
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => response.json())
        .then(data => {
            const {moves} = data;
            this.setState({moves: moves});
        })
        .catch((err) => alert(err));
    }

    renderPikachuMoves() {
        const {moves} = this.state;
        if (moves) {

        return Object.keys(moves)
                     .map((k) => {
                        return <span key={k}>{moves[k].move.name}</span>
                     })
        }
        else {

            return <></>
        }
    }

    render() {
        console.log('render')
        return <>
            <h1 key='1'>Class Component algo:{this.state.algo}</h1>
            <h2 key='2'>consumer: {this.state.consumer} {this.state.counter}</h2>
            <div style={{border:'1px solid', marginTop:10, padding:10}} onMouseOver={this.handleMouseOver}>

            </div>
            <button onClick={this.handleClick}>cambiar algo</button>
            {this.renderPikachuMoves()}
        </>
    }
}
export default ClassComponent;