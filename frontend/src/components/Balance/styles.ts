import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  @media(min-width: 1000px) {
    display: flex;
  }
`

export const Element = styled.div`
  flex: 1;

  & + & {
    margin-top: 1rem;
  }

  @media(min-width: 1000px) {
    & + & {
      margin: 0;
      margin-left: 32px;
    }
  }
`
