import axios from 'axios';

export function incrementar() {
  return {
    type: 'INCREMENTAR'
  };
}

export function traerPersonas() {
  return {
    type: 'TRAER_PERSONAS',
    payload: axios.get('http://swapi.co/api/people/')
  };
}
