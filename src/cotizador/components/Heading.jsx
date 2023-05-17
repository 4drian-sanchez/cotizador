import styled from '@emotion/styled'

const HeadingComponent = styled.h1`
    font-family:  "lato", sans-serif;
    color: white;
    margin: 3rem 0;
    text-align: center;
    font-size: 2.5rem;

    &::after {
        content: '';
        display: block;
        width: 10rem;
        height: .5rem;
        background-color: #66A2FE;
        margin: 1rem auto 0 auto ;
    }
    
    @media(min-width: 992px) {
        font-size: 3.5rem;
        margin-top: 10rem;
    }
`

export const Heading = () => {
    return (
        <HeadingComponent>Cotiza criptomonedas al instante</HeadingComponent>
    )
}
