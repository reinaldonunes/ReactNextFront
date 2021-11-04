import { Component } from "react";

export default class Contador extends Component{
    
    state = {
        numero: this.props.valorInicial
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero + 1
        })
    }
    
    render(){
        return(
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}