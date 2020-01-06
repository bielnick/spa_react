import {URL_API} from './Base'

export function buscaFaturamento(callback){
    return fetch(`${URL_API}/faturamento`).then(dadosJoson => dadosJoson.json().then(callback));
}