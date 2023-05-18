import { useEffect, useState } from 'react';
import { Heading, Imagen, Form } from './cotizador/components';
import { Contenedor } from './cotizador/layout/Contenedor';

export const App = () => {

  const [monedasApp, setmonedasApp] = useState({});

  useEffect(() => {

    if (Object.keys(monedasApp).length > 0) {
      console.log(monedasApp);
    }

  }, [monedasApp])


  return (
    <>
      <Contenedor>

        <Imagen />

        <div>
          <Heading />
          <Form
            setmonedasApp={setmonedasApp}
          />
        </div>
      </Contenedor>
    </>

  )
};
