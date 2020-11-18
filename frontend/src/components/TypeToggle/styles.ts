import styled, { css } from 'styled-components'

interface ButtonProps {
  selected: boolean
}

interface IconProps {
  type: 'income' | 'outcome'
}

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f2f2f2;
  background: none;
  border-radius: 5px;
  transition: background 200ms;
`

export const LeftButton = styled(Button)`
  margin-right: 8px;

  ${props => props.selected && css`
    background: rgb(18, 164, 84, 0.3);
  `}

  &:hover {
    background: rgb(18, 164, 84, 0.1);
  }
`

export const RightButton = styled(Button)`
  ${props => props.selected && css`
    background: rgb(232, 63, 91, 0.3);
  `}

  &:hover {
    background: rgb(232, 63, 91, 0.1);
  }
`

export const Icon = styled.section<IconProps>`
  display: flex;
  font-size: 20px;
  margin-right: 5px;
  color: ${props => props.type === 'income' ? '#12A454' : '#E83F5B'};
`
