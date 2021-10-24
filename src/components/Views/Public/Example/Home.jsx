import { useEffect, useState } from 'react';
import { InitialState } from '../../../../Request/getRequest';
import { getComida } from '../../../Providers/Home.p';

function Home()
{
  const [ Comida , setComida] = useState(InitialState);

  useEffect(() => {

    getComida().then(result => setComida(result))

  }, [setComida])

  if(Comida?.isLoading) {
    return <h1>Loading ....</h1>
  }

  if(Comida?.isFailed) {
    return <h1>Error fetching data..!</h1>
  }

  return (
    <>
      <h1>Comidas Type</h1>
      <ul>
        {Comida.data?.map((elm, i) => (
          <li key={i}>{elm.nombre} + {elm.descripcion}</li>
        ))}
      </ul>
    </>
  )
}

export default Home;