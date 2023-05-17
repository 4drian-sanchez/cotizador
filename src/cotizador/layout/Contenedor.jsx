import styled from '@emotion/styled';

const ContenedorComponent = styled.main`
    max-width: 90rem;
    width: 90%;
    margin: 0 auto;
    min-height: 100vh;

    @media(min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }
`;

export const Contenedor = ( { children } ) => {
  return (
    <ContenedorComponent>
        { children }
    </ContenedorComponent>
  )
}
