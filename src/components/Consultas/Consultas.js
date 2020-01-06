import React, { Component } from 'react';
import { buscaConsultas } from './../../servicos/Consultas';

class Consultas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            realizadas: [],
            marcadas: []
        }
    }

    componentDidMount() {
        buscaConsultas(dadosJson => this.setState(dadosJson))
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="mt-2">Consultas</h1>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                <h3>Realizadas</h3>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Especialidade</td>
                                        <td>Quantidade</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.realizadas.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        {item.especialidade}
                                                    </td>
                                                    <td>
                                                        {item.quantidade}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                <h3>Realizadas</h3>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Quantidade</td>
                                        <td>Especialidade</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.marcadas.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Consultas