import { useEffect, useState } from 'react';
import { Heading, Imagen, Form } from './cotizador/components';
import { Resultado } from './cotizador/components/Resultado';
import { Contenedor } from './cotizador/layout/Contenedor';
import { Spinner } from './cotizador/components/Spinner';
export const App = () => {

  const [monedasApp, setmonedasApp] = useState({});
  const [resultado, setResultado] = useState({});
  const [spinner, setSpinner] = useState(false);
  
  useEffect(() => {

    if (Object.keys(monedasApp).length > 0) {

      const consultarApi = async () => {
        setSpinner(true)
        setResultado({})
        const { moneda, criptomoneda } = monedasApp;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resp = await fetch(url);
        const { DISPLAY } = await resp.json();;

        setResultado(DISPLAY[criptomoneda][moneda]);
        setSpinner(false)
      }
      consultarApi();
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

          {/* { resultado.PRICE && <Resultado/>} */}
          { spinner && <Spinner/> }
          { Object.keys(resultado).length > 0 && <Resultado resultado={resultado}/>}
          
        </div>
      </Contenedor>
    </>

  )
};
