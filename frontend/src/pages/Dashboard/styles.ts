import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media(min-width: 1000px) {
    padding: 30px 0;
  }
`

export const Main = styled.main`
  flex: 1;
  max-width: min(90%, 1120px);
  flex-direction: column;

  @media(min-width: 1000px) {
    display: flex;
  }
`
