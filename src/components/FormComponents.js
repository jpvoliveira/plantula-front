import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: auto;

  p{
    color: black;
  }
  h1{
    font-size: 30px;
  }
  .logo{
    width: 200px;
    height: 100px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;

  gap: 5px;
`
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;

  width: 100%;

  color: #000;
  background: #FFFFFF;
  padding: 15px 16px;
  border-radius: 5px;

  ::placeholder {
    color: #000;
    font-family: 'Raleway', sans-serif;
  }
`

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0em;

  text-align: center;

  padding: 12px;
  color: white;
  background: #528654;
  border-radius: 5px;
  margin-top: 20px;
`

export {
  Container,
  Form,
  Input,
  Button,
}