import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  width: min(90%, 736px);
  padding: min(5%, 64px);
  border-radius: 5px;
  background: #fff;
`

export const Form = styled.form`
  flex: 1;
`

export const Title = styled.h1`
  font-size: min(5vw, 36px);
  margin-top: min(5vw, 64px);
  margin-bottom: min(3vw, 40px);
`

export const TextArea = styled.input`
  width: 100%;
  height: 50px;
  display: block;
  padding: 0 16px;
  border-radius: 5px;
  background: #f2f2f2;

  ::placeholder {
    color: #969CB3
  }

  & + & {
    margin-top: 16px;
  }
`

export const Toggle = styled.div`
  margin-top: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: block;
  background: #FF872C;
  border-radius: 5px;
  color: #fff;
  margin: 16px 0;
`
