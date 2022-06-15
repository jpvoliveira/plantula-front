import styled from "styled-components";
import Logo from "../assets/plantulaLogo";
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TokenContext from '../contexts/tokenContext'
import api from "../services/api";
import { ArrowUDownLeft, SignOut } from "phosphor-react";

export default function Header(props) {
  const navigate = useNavigate()
  const { token } = useContext(TokenContext)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const promise = api.findUser(token)
    promise.then((res) => {
      setUsername(res.data.name)
    }).catch((error) => {
      const erro = error.response.status
      if (erro === 401) {
        setUsername(null)
      } else {
        alert(erro)
      }
    })
  }, [token])


  function handleLogout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('cart')
    navigate('/')
    window.location.reload()
  }

  function handleLogin() {
    navigate('/sign-in')
  }

  let name = ''
  if (username) name = username?.split(' ')

  return (
    <>
      <BoxHeader>
        <Logo />
        {props.return ? <ArrowUDownLeft onClick={() => navigate('/')} size={28} color='white' /> :
          <BoxInfoUser>
            {token ?
              <>
                <h1>Ola, {name[0]}</h1>
                <div onClick={handleLogout}>
                  <SignOut size={28} weight="bold" />
                </div>
              </>
              :
              <h2 onClick={handleLogin}>Clique aqui para acessar sua conta!</h2>
            }
          </BoxInfoUser>
        }
      </BoxHeader>
    </>
  )
}

const BoxHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 130px;
  width: 100vw;
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