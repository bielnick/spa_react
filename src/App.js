import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="row">
        <div className="col">
          <Switch>
            <Route path="/consultas" component={Consultas} />
            <Route path="/faturamento" component={Faturamento} />
            <Route path="/" component={Resumo} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
