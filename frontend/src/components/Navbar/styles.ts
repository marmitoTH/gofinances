import styled, { css } from 'styled-components'

interface BackgroundProps {
  expand?: boolean
}

interface MenuProps {
  visible: boolean
}

interface OptionProps {
  selected?: boolean
}

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background: #5636D3;

  @media(min-width: 1000px) {
    height: 90px;
  }
`

export const Container = styled.div`
  max-width: min(90%, 1120px);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Background = styled.div<BackgroundProps>`
  height: 0;
  width: 100%;
  z-index: -1;
  position: absolute;
  background: #5636D3;
  transition: height 200ms;

  ${props => props.expand && css`
    height: 120px;

    @media(min-width: 1000px) {
      height: 150px;
    }
  `}
`

export const Menu = styled.ul<MenuProps>`
  padding: 10px 20px;
  position: absolute;
  right: 0;
  top: 80px;
  background: #5636D3;
  border-top: 5px solid #FF872C;

  ${props => !props.visible && css`
    display: none;
  `}

  @media(min-width: 1000px) {
    padding: 0;
    display: initial;
    position: initial;
    display: flex;
    border-top: none;
  }
`

export const Option = styled.li<OptionProps>`
  list-style-type: none;
  text-align: right;

  a {
    display: block;
    height: 35px;
    color: #fff;
    text-decoration: none;
  }

  @media(min-width: 1000px) {
    a {
      opacity: 0.8;
      transition: opacity 200ms;

      &:hover {
        opacity: 1;
      }

      ${props => props.selected && css`
        opacity: 1;
        height: 32px;
        border-bottom: 2px solid #FF872C;
      `}
    }

    & + & {
      margin-left: 32px;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  background: none;

  @media(min-width: 1000px) {
    display: none;
  }
`

export const Logo = styled.img`
  max-height: 24.5px;

  @media(min-width: 1000px) {
    max-height: none;
  }
`
