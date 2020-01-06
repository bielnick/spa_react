import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MenuSuperior extends Component{
    render(){
        return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <Link to="/" className="navbar-expand">SPA REACT</Link>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Resumo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faturamento" className="nav-link">Faturamento</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/consultas" className="nav-link">Consultas</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default MenuSuperior;