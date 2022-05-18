import { Link } from "react-router-dom"
import { Container, Form, Input, Button } from "../../components/FormComponents"
import Logo from '../../assets/plantulaLogo.js'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import TokenContext from '../../contexts/tokenContext'
import requestContext from '../../contexts/requestContext';

export default function SignIn() {
  const [userData, setUserData] = useState({
    email: '',
    password:''
  })
  const navigate = useNavigate()
  const { persistToken } = useContext(TokenContext)
  const {request} = useContext(requestContext)

  function handleChange({ target }) {
    setUserData({ ...userData, [target.name]: target.value });
  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const {data} = await api.signIn(userData)
      persistToken(data)
      if (request) {
        navigate('/ordered')
      }else{
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      alert(error.request.response)
    }
  }

  return (
    <Container>
      <Logo class="logo"/>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          value={userData.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  )
}