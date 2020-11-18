import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: block;
  background: #FF872C;
  border-radius: 5px;
  color: #fff;
  transition: background 200ms;

  :hover {
    background: ${shade(0.1, '#FF872C')};
  }
`
