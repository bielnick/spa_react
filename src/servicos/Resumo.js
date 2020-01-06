import {URL_API} from './Base'


export function consultaResumo(callback){
    fetch(`${URL_API}/resumo`)
    .then(response => response.json().then(callback))
} 