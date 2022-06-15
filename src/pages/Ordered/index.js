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
  const { request, setRequest } = useContext(requestContext)
  const { token } = useContext(TokenContext)
  const [userData, setUserData] = useState({})
  const [modal, setModal] = useState(false)
  const [amount, setAmount] = useState(request.amount)
  const navigate = useNavigate()
  let priceUpdate = (request.product.price / 100) * amount
  const signal = priceUpdate * 0.3
  const orderData = {
    userId: userData.id,
    productId: request.product.id,
    amount: amount,
    value: signal
  }

  useEffect(() => {
    const promise = api.findUser(token)
    promise.then((res) => {
      setUserData(res.data)
    }).catch((error) => {
      if (error.response.status === 401) {
        navigate('/sign-in')
      } else {
        const err = error.response.data
        alert(err)
      }
    })
  }, [token, navigate])

  function handleCancel() {
    localStorage.removeItem('cart')
    navigate('/')
  }

  let newRequest = request
  newRequest.price = priceUpdate
  newRequest.amount = amount

  setRequest(newRequest)

  return (
    <>
      <Header />
      <Box>
        <h1>Resumo da compra:</h1>
        <BoxRequest request={request} amount={amount} setAmount={setAmount} />
        <p>ATENÇÃO: Nós solicitamos o pagamento de um <br /> sinal no  valor 30% para garantia da mercadoria <br /> e o restante na retirada do produto.</p>
        <p>VALOR A SER PAGO: R$ {signal.toFixed(2)}</p>
        <ButtonCancel onClick={handleCancel}>CANCELAR COMPRA</ButtonCancel>
        <p>ou</p>
        {
          modal ?
            <BoxPayment orderData={orderData} />
            :
            <ButtonConfirm onClick={() => setModal(true)}>FORMA DE PAGAMENTO</ButtonConfirm>
        }
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
const ButtonCancel = styled.button`
  background-color: grey;
  border: none;
  color: white;
  width:200px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  `

const ButtonConfirm = styled.button`
  background-color: #528654;
  border: none;
  color: white;
  width:200px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  `
