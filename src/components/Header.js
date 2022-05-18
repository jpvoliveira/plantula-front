import styled from "styled-components";
import Logo from "../assets/plantulaLogo";
import Logout from "../assets/logout";
import Login from "../assets/login";
import MenuIcon from "../assets/menuIcon";
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TokenContext from '../contexts/tokenContext'

export default function Header() {
  const navigate = useNavigate()
  const { token } = useContext(TokenContext)

  function handleLogout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('cart')
    navigate('/')
    window.location.reload()
  }

  function handleLogin() {
    navigate('/sign-in')
  }
  return (
    <>
      <BoxHeader>
        <div>
          <MenuIcon/>
        </div>
        <Logo/>
        {token ? 
        <div onClick={handleLogout}>
          <Logout/>
        </div>
        :
        <div onClick={handleLogin}>
          <Login/>
        </div>
        }
      </BoxHeader>
    </>
  )
}

const BoxHeader = styled.div`
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 90px;
  padding: 0px 15px;
  background-color:#528654;
  div{
    display:flex;
    align-items: center;
    justify-content: center; 
  }
`