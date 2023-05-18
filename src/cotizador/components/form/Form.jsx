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

export const Form = () => {
  
  const [cryptoState, setCryptoState] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [errorState, setErrorState] = useState(false);

  //Agregando validacion
  const hundleSubmit = e => {
    e.preventDefault();

    if(isValid) {
      setErrorState(true)
      return
    };
    setErrorState(false)

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
      setIsValid={ setIsValid }
    />

    <InputSubmit 
      type='submit'
      value='Buscar cotizacion'
    />
    </form>
  )
}
