import styled from "styled-components";
import Logo from "../assets/plantulaLogo"

export default function Header() {
  return (
    <BoxHeader>
      <Logo />
    </BoxHeader>
  )
}

const BoxHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color:#2C7E4C;;
`