import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { getCryptos } from '../../helpers/getCryptos';
import { Selects } from './Selects';
import {Error} from '../Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    width: 100%;
    padding: 1rem;
    border: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    border-radius: .5rem;
    transition: 300ms background ease;

    &:hover {
      background-color: #6f74ff;
      cursor: pointer;
    }
`;

export const Form = ( { setmonedasApp } ) => {
  
  const [cryptoState, setCryptoState] = useState([]);
  const [monedas, setMonedas] = useState({});
  const [errorState, setErrorState] = useState(false);

  //Agregando validacion
  const hundleSubmit = e => {
    e.preventDefault();


    //Validar desde el state de monedas!!
    if(Object.values(monedas).includes('')) {
      setErrorState(true)

      setTimeout(() => {
      setErrorState(false)
      }, 2000);

      return
    };

    setErrorState(false)
    setmonedasApp(monedas)
  }


  
  //Ppeticion https de la API
  const data = async () => {
    const cryptos = await getCryptos();
    setCryptoState( cryptos );
  }
  
  useEffect(() => {
    data();
  }, [])
   
 return (
    <form
      onSubmit={ hundleSubmit }
    >

    {/* Error */}

    { errorState && <Error>Todos los campos son oobligatorios</Error> }
    <Selects
      cryptoState={ cryptoState }
      setMonedas={ setMonedas }
    />

    <InputSubmit 
      type='submit'
      value='Buscar cotizacion'
    />
    </form>
  )
}
