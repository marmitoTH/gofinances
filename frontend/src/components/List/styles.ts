import { shade } from 'polished'
import styled from 'styled-components'

interface ValueProps {
  type?: string
}

function getValueColor(type?: string) {
  switch (type) {
    case 'income':
      return '#12A454'
    case 'outcome':
      return '#E83F5B'
  }
}

export const Container = styled.div``

export const Header = styled.header`
  margin: 24px 0;

  @media(min-width: 1000px) {
    margin: 20px 0;
    margin-top: 60px;

    h3 {
      display: none;
    }
  }
`

export const Options = styled.nav`
  display: none;
  text-align: center;
  padding: 0 60px;
  color: #969CB3;

  @media(min-width: 1000px) {
    display: flex;
  }
`

export const OptTitle = styled.p`
  flex: 2.25;
  text-align: left;
`

export const OptValue = styled.p`
  flex: 1.25;
`

export const OptCategory = styled.p`
  flex: 1;
`

export const OptDate = styled.p`
  flex: 1;
  text-align: right;
`

export const Element = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 24px;

  & + & {
    margin-top: 16px;
  }

  @media(min-width: 1000px) {
    display: flex;

    & + & {
      margin-top: 8px;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #969CB3;

  @media(min-width: 1000px) {
    flex: 1;
  }
`

export const Title = styled.div`
  @media(min-width: 1000px) {
    flex: 1.25;
  }
`

export const Value = styled.div<ValueProps>`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${props => getValueColor(props.type)};

  @media(min-width: 1000px) {
    flex: 1;
    margin: 0;
    text-align: center;
  }
`

export const Category = styled.div`
  @media(min-width: 1000px) {
    flex: 1;
  }
`

export const Date = styled.div`
  @media(min-width: 1000px) {
    flex: 1;
    text-align: right;
  }
`

export const Message = styled.h1`
  text-align: center;
  font-size: min(6vw, 28px);
  margin-top: 50px;

  a {
    color: #FF872C;
    text-decoration: none;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #969CB3;
  background: none;
  margin-left: 15px;

  &:hover {
    color: ${shade(0.3, '#969CB3')};
  }
`
