import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: white;
    font-family: 'lato', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;

    @media(min-width: 576px) {
        flex-direction: row;
        text-align: left;
    }
`

const Precio = styled.p`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;

    & span {
        font-weight: 900;
        margin-left: .5rem;
    }
`

const Texto = styled.p`
    margin-bottom: .8rem;
    font-size: 1.8rem;

    & span {
        font-weight: 900;
        margin-left: .5rem;
    }
`

const Imagen = styled.img`
    display: block;
    width: 12rem;
    margin-bottom: 2rem;

    @media(min-width: 576px) {
        margin-bottom: 0;
    }
`

export const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <Contenedor>

            <Imagen
                src={`https://www.cryptocompare.com/${IMAGEURL}`}
                alt='Imagen de la cripto'
                title='Imagen de la cripto'
            />
            
            <div>
                <Precio>El precio es de <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día es <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día es <span>{LOWDAY}</span></Texto>
                <Texto>Variación en las últimas 24 horas <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}
