import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function BoxPayment({ orderData }) {
  const navigate = useNavigate()
  console.log(orderData)
  // let mensagem = `Ola gostaria de fazer um pedido.`
  // let link = 'https://wa.me/5531975881152?text=' + encodeURIComponent(mensagem)
  // window.open(link)


  function handleConfirm(type) {
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

  return (
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
    background-color: #528654;
    border: none;
    color: white;
    width:100px;
    height: 50px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
  }
` 