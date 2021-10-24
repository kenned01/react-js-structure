import { useState } from "react";
import { addComida, Comida } from '../../../Providers/Home.p';

export default function HomeAdd() {

  const [comida, setComida] = useState(Comida);

  function submit(e) {
    e.preventDefault();

    addComida(comida)
    .then(result => {
      if(result.isFailed) alert('error post')
      if(result.isLoading) alert('posting')
      if(result.data) console.log(result.data)
    })

  }

  return (
    <form onSubmit={submit}>

      <input placeholder="nombre" value={comida.nombre} onChange={(e) => setComida({...comida, nombre: e.target.value})} />
      <br /><br />
      <input placeholder="descripcion" value={comida.descripcion} onChange={(e) => setComida({...comida, descripcion: e.target.value})} />

      <br/><br />
      <input type="url" placeholder="imagen" value={comida.imagen}  onChange={(e) => setComida({...comida, imagen: e.target.value})}/>

      <br/><br />
      <button type="submit">SAVE</button>
    </form>
  );
}