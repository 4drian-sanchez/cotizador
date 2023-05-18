import styled from '@emotion/styled'
import { useEffect } from 'react';
import { monedas } from '../../data/data'
import { useForm } from '../../hooks/useForm';


const SelectComponent = styled.select`
    width: 100%;
    font-family: 'lato', sans-serif;
    padding: 1rem;
    font-size: 2rem;
    margin-bottom: 2rem;
    border: none;
    color: #333333d7;

    &:focus-visible {
        outline: none;
    }
`

const Label = styled.label`
    color: white;
    font-size: 2rem;
    font-family: 'lato', sans-serif;
    margin-bottom: 1.5rem;
    display: block;
    text-align: center;
`;

export const Selects = ({ cryptoState, setIsValid }) => {

    const { moneda, criptomoneda, hundleChange, formState } = useForm({ moneda: '', criptomoneda: '' });

    useEffect(() => {
        setIsValid(Object.values(formState).includes(''));
    }, [formState]);


    return (
        <>
            <Label htmlFor="moneda">Selecione tu moneda</Label>
            <SelectComponent
                value={moneda}
                onChange={hundleChange}
                name='moneda'
                id='moneda'
            >
                <option value="" disabled  >-Selecione-</option>
                {
                    monedas.map(({ id, nombre }) => (
                        <option key={id} > {nombre} </option>
                    ))
                }
            </SelectComponent>

            <Label htmlFor="criptomoneda">Selecione la criptomoneda</Label>
            <SelectComponent
                value={criptomoneda}
                onChange={hundleChange}
                name='criptomoneda'
                id='criptomoneda'
            >
                <option value="" disabled  >-Selecione-</option>
                {
                    cryptoState.map(({ nombreCompleto, nombre }) => (
                        <option key={nombre} value={nombre} > {nombreCompleto} </option>
                    ))
                }
            </SelectComponent>
        </>
    )
}
