import React, { Component } from 'react';
import { buscaFaturamento } from './../../servicos/Faturamento';

class Faturamento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detalhamento: []
        }
    }


    componentDidMount() {
        buscaFaturamento(dataJson => this.setState(dataJson))
    }

    render() {
        return (
            <div className="container-fluid">
                <h2 className="mt-2">Faturamento</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2 text-center">
                            <div className="card-header">
                                Total por forma de pagamento
                             </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Descrição</td>
                                        <td>Valor</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.detalhamento.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        {item.descricao}
                                                    </td>
                                                    <td>
                                                        {item.valor.toLocaleString("pt-BR",
                                                            {
                                                                style: "currency",
                                                                currency: "BRL"
                                                            }
                                                        )}
                                                    </td>
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

export default Faturamento