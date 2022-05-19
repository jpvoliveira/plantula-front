import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requestContext from '../../contexts/requestContext';
import TokenContext from '../../contexts/tokenContext'
import api from '../../services/api'
import Header from "../../components/Header"
import styled from 'styled-components'

export default function Ordered() {
  const {request} = useContext(requestContext)
  const { token } = useContext(TokenContext)
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const sinal = request.price * 0.3
  
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
      <Header />
      <Box>
        <h1>Ola, {userData.name}</h1>
        <h2>Finalizar a compra:</h2>
        <BoxRequest request={request}/>
        <button onClick={handleCancel}>CANCELAR COMPRA</button>
        <p>ATENÇÃO: Nós solicitamos o pagamento de um <br/> sinal no  valor 30% para garantia da mercadoria
        </p>
        <p>VALOR A SER PAGO: R$ {sinal.toFixed(2)}
        </p>
        <h2>Forma de pagamento:</h2>
        <BoxPayment/>
      </Box>
    </>
  )
}

function BoxRequest({request}) {
  return(
    <ContainerRequest>
      <ImageBox url={request.product.image}/>
      <ProductData>
        <h1>Produto: {request.product.name}</h1>
        <h1>Preço unitario: {request.product.price}</h1>
        <h1>Quantidade: {request.amount}</h1>
        <h1>Valor total: R$ {request.price}</h1>
      </ProductData>
    </ContainerRequest>
  )
}

const ContainerRequest = styled.div`
  height: 100px;
  width: 400px;
  background-color: #D7EDC3;
  border-radius: 5px;
  display: flex;
  border: 1px solid black;
  button{
    height: 30px;
  }
` 

const ImageBox = styled.div`
  width: 100px;
  height: 98px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
  border-radius: 5px;
`

const ProductData = styled.div`
padding-left: 15px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 5px;
`

function BoxPayment() {
  const navigate = useNavigate()
  return(
    <ContainerPayment>
      <button onClick={() => navigate(`/ordered/payment/boleto`)}>BOLETO</button>
      <button onClick={() => navigate(`/ordered/payment/pix`)}>PIX</button>
      <button onClick={() => navigate(`/ordered/payment/ted`)}>TED</button>
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