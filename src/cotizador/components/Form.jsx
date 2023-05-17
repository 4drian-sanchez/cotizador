import styled from '@emotion/styled'

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
`

export const Form = () => {
  return (
    <form>

    <InputSubmit 
      type='submit'
      value='Buscar cotizacion'
    />
    </form>
  )
}
