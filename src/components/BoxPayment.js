import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function BoxPayment({orderData}) {
  const newValue = orderData.value.toString()
  orderData.value = newValue
  const navigate = useNavigate()

  function handleConfirm(type){
    const promise = api.postOrder(orderData)
    promise.then((res) => {
      navigate(`/ordered/payment/${type}`)
    }).catch((error) => {
      if (error.response.status === 401) {
        navigate('/sign-in')
      } else {
        const erro = error.response.data
        alert(erro)
      }
    })
  }

  return(
    <ContainerPayment>
      <button onClick={() => handleConfirm('boleto')}>BOLETO</button>
      <button onClick={() => handleConfirm('pix')}>PIX</button>
      <button onClick={() => handleConfirm('ted')}>TED</button>
    </ContainerPayment>
  )
}

const ContainerPayment = styled.div`
  height: 50px;
  width: auto;
  border-radius: 5px;
  display: flex;
  gap: 5px; 
  button{
    width: 100px;
    border-radius: 5px;
  }
` 