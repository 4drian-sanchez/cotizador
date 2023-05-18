import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { getCryptos } from '../../helpers/getCryptos';
import { Selects } from './Selects';

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
  
    
    
    
  //Ppeticion https de la API
  const data = async () => {
    const cryptos = await getCryptos();
    setCryptoState( cryptos );
  }
  
  useEffect(() => {
    data();
  }, [])
   
 return (
    <form>
    <Selects
      cryptoState={ cryptoState }
    />

    <InputSubmit 
      type='submit'
      value='Buscar cotizacion'
    />
    </form>
  )
}
