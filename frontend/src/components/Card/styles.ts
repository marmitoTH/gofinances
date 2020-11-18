import styled, { css } from 'styled-components'

interface ContainerProps {
  secondary?: boolean
}

interface IconProps {
  type?: string
}

function getIconColor(type?: string) {
  switch (type) {
    case 'income':
      return '#12A454'
    case 'outcome':
      return '#E83F5B'
  }
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  border-radius: .5rem;
  padding: 18px 32px;
  background: #fff;

  ${props => props.secondary && css`
    color: #fff;
    background: #FF872C;
  `}

  h1 {
    margin-top: 12px;
    font-weight: normal;
    font-size: clamp(23px, 2vw, 36px);
  }
`

export const Header = styled.header`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`

export const Icon = styled.span<IconProps>`
  font-size: 27px;
  color: ${props => getIconColor(props.type)};
`
