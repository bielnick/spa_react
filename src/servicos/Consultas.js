import {URL_API} from './Base';

export function buscaConsultas(callback){
    return fetch(`${URL_API}/consulta`).then(dadosJoson => dadosJoson.json().then(callback));
}