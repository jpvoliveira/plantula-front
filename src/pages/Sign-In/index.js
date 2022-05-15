import { Link } from "react-router-dom"
import { Container, Form, Input, Button } from "../../components/FormComponents"

export default function SignIn() {
  return (
    <Container>
      <h1>Plantula</h1>
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