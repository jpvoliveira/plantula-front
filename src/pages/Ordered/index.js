import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requestContext from '../../contexts/requestContext';
import TokenContext from '../../contexts/tokenContext'
import api from '../../services/api'
import Header from "../../components/Header"
import styled from 'styled-components'
import BoxRequest from '../../components/BoxRequest'
import BoxPayment from '../../components/BoxPayment'

export default function Ordered() {
  const {request} = useContext(requestContext)
  const { token } = useContext(TokenContext)
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const sinal = request.price * 0.3

  console.log(userData)
  console.log(request)

  const orderData = {
    userId: userData.id,
    productId: request.product.id,
    amount: request.amount,
    value: request.price
  }
  
  useEffect(()=>{
    const promise = api.findUser(token)
    promise.then((res)=>{
      setUserData(res.data)
    }).catch((error)=>{
      if (error.response.status === 401) {
        navigate('/sign-in')
      }else{
        const erro = error.response.data
        alert(erro)
      }
    })
  }, [])

  function handleCancel() {
    localStorage.removeItem('cart')
    navigate('/')
  }

  return(
    <>
      <Header/>
      <Box>
        <h1>Finalizar a compra:</h1>
        <BoxRequest request={request}/>
        <button onClick={handleCancel}>CANCELAR COMPRA</button>
        <p>ATENÇÃO: Nós solicitamos o pagamento de um <br/> sinal no  valor 30% para garantia da mercadoria
        </p>
        <p>VALOR A SER PAGO: R$ {sinal.toFixed(2)}
        </p>
        <h2>Forma de pagamento:</h2>
        <BoxPayment orderData={orderData}/>
      </Box>
    </>
  )
}

const Box = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p{
    text-align: center;
    font-weight: bold;
  }
`