import styled from '@emotion/styled';
import  imagenCriptos from '../../img/imagen-criptos.png';

const ImagenComponent = styled.img`
    max-width: 40rem;
    width: 80%;
    display: block;
    margin: 10rem auto 0 auto;
`

export const Imagen = () => {
  return (
    <ImagenComponent
        src={ `.${imagenCriptos}` }
        alt='Imagen de la aplicacion'
        title='Imagen de la aplicacion'
    />
  )
}
