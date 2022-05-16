import { Link } from "react-router-dom"
import { Container, Form, Input, Button } from "../../components/FormComponents"
import Logo from '../../assets/plantulaLogo.js'

export default function SignIn() {
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
          placeholder="Senha"
          type="password"
          name="password"
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