import styled from "styled-components";
import Logo from "../assets/plantulaLogo";
import Logout from "../assets/logout";
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TokenContext from '../contexts/tokenContext'
import api from "../services/api";

export default function Header() {
  const navigate = useNavigate()
  const { token } = useContext(TokenContext)
  const [username, setUsername] = useState(null)
  
  useEffect(()=>{
    const promise = api.findUser(token)
    promise.then((res)=>{
      setUsername(res.data.name)
    }).catch((error)=>{
      const erro = error.response.status
      if (erro === 401) {
        setUsername(null)
      }else{
        alert(erro)
      }
    })
  }, [])

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
        <Logo />
        <BoxInfoUser>
          {token ?
            <>
              <h1>Ola, {username}</h1>
              <div onClick={handleLogout}>
                <Logout />
              </div>
            </>
            :
            <h2 onClick={handleLogin}>Clique aqui para acessar sua conta!</h2>
          }
        </BoxInfoUser>
      </BoxHeader>
    </>
  )
}

const BoxHeader = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 130px;
  padding: 10px 15px;
  background-color:#528654;
  border-radius: 0px 0px 30px 30px;
  div{
    display:flex;
    align-items: center;
    justify-content: center; 
  }
`

const BoxInfoUser = styled.div`
  display: flex;
  gap: 200px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  h2{
    font-size: 15px;
  }
`