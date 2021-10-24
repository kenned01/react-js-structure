import { getRequest } from '../../Request/getRequest';

const Comida = {
  id: 0,
  nombre: "",
  descripcion: "",
  imagen: ""
}

function getComida()  {
  return getRequest({
    event: 'GET',
    config: {
      uri: 'comida',
    }
  });
}

function addComida(comida){
  return getRequest({
    event: 'POST',
    config: {
      method: 'POST',
      uri: 'comida',
      data: comida
    }
  });
}

export  {
  Comida,
  getComida,
  addComida
}