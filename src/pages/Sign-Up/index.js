import { Link } from "react-router-dom"
import { Container, Form, Input, Button } from "../../components/FormComponents"
import Logo from '../../assets/plantulaLogo.js'
import requestContext from '../../contexts/requestContext';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function SignUp() {
  const {request} = useContext(requestContext)
  const navigate = useNavigate()
  
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password:'',
    cpf:'',
    cell: '',
    city: '',
    address: ''
  })
  
  function handleChange({ target }) {
    setUserData({ ...userData, [target.name]: target.value });
  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      await api.signUp(userData)
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
      alert(error.request.response)
    }
  }

  return (
    <Container>
      <Logo class="logo"/>
      <Form onSubmit={handleSubmit} >
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          value={userData.name}
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
        <Input
          placeholder="Cpf"
          type="text"
          name="cpf"
          value={userData.cpf}
          onChange={(e) => handleChange(e)}
          required
        />
        <Input
          placeholder="Celular"
          type="text"
          name="cell"
          value={userData.cell}
          onChange={(e) => handleChange(e)}
          required
        />
        <Input
          placeholder="Cidade"
          type="text"
          name="city"
          value={userData.city}
          onChange={(e) => handleChange(e)}
          required
        />
        <Input
          placeholder="Endereço"
          type="text"
          name="address"
          value={userData.address}
          onChange={(e) => handleChange(e)}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Link to="/sign-in">
        <p>Já tem conta? Clique aqui para entrar!</p>
      </Link>
    </Container>
  )
}