import styled from '@emotion/styled'

const Texto = styled.p`
   background-color: #B7322C;
   color: white;
   padding: 2rem;
   text-transform: uppercase;
   text-align: center;
   margin-bottom: 2rem;
   font-family: 'lato', sans-serif;
   font-weight: 700;
   border-radius: .5rem;
`

export const Error = ( {  children } ) => {
  return (
    <Texto>
        { children }
    </Texto>
  )
}
