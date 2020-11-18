import styled, { css } from 'styled-components'
import { darken } from 'polished'

interface InputProps {
  active: boolean
}

export const Input = styled.div<InputProps>`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #969CB3;
  border-radius: 5px;
  cursor: pointer;
  color: #5636D3;
  transition: opacity ease 200ms;
  font-size: min(4vw, 16px);
  background: #fff;
  transition: background 200ms;
  outline: none;

  ${props => props.active && css`
    opacity: 0.5;
  `}

  &:hover, &:focus {
    background: ${darken(0.02, '#fff')};
  }
`
