import { Heading, Imagen, Form } from './cotizador/components';
import { Contenedor } from './cotizador/layout/Contenedor';

export const App = () => {
  return (

    <>

      <Contenedor>

        <Imagen/>

        <div>
          <Heading/>
          <Form/>
        </div>
      </Contenedor>


    </>

  )
};
