import { Link } from "react-router-dom"
import { Container, Form, Input, Button } from "../../components/FormComponents"
import Logo from '../../assets/plantulaLogo.js'

export default function SignUp() {
  return (
    <Container>
      <Logo class="logo"/>
      <Form >
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          required
        />
        <Input
          placeholder="Nome"
          type="nome"
          name="nome"
          required
        />
        <Input
          placeholder="Cpf"
          type="cpf"
          name="cpf"
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          required
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          name="password"
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Link to="/">
        <p>Já tem conta? Clique aqui para entrar!</p>
      </Link>
    </Container>
  )
}