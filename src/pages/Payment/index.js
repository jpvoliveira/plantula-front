import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requestContext from '../../contexts/requestContext';
import TokenContext from '../../contexts/tokenContext'
import api from '../../services/api'
import Header from "../../components/Header"
import styled from 'styled-components'

export default function Payment() {
  const { type } = useParams();
  const { request } = useContext(requestContext)
  const { token } = useContext(TokenContext)
  const navigate = useNavigate()

  useEffect(() => {
    const promise = api.findUser(token)
    promise.then((res) => {
    }).catch((error) => {
      if (error.response.status === 401) {
        navigate('/sign-in')
      } else {
        const erro = error.response.data
        alert(erro)
      }
    })
  }, [])

  if (type === 'boleto') {
    return (
      <Boleto request={request} />
    )
  } else if (type === 'pix') {
    return (
      <Pix request={request} />
    )
  } else if (type === 'ted') {
    return (
      <Ted request={request} />
    )
  }
}

function Boleto({ request }) {
  const sinalValue = request.price * 0.3
  return (
    <>
      <Header />
      <Box>
        <h1>Segue abaixo o boleto para pagamento:</h1>
        <h2>Valor: R$ {sinalValue.toFixed(2)}</h2>
        <BoletoBox />
        <h1>Codigo de barras:</h1>
        <h2>00190.00009 02770.795009 00379.694177 1 898100000010999</h2>
        <div>
          <p>AO FINALIZAR A OPERAÇÃO, FAVOR ENVIAR <br /> O COMPROVANTE PARA O NUMERO:</p>
          <h2>Whatsapp: (31)97588-1152</h2>
        </div>
        <span>ATENÇÃO: O pedido só sera confirmado após o envio do comprovante para o numero citado acima!</span>
        <h1>Obrigado pela confiança!</h1>
      </Box>
    </>
  )
}

const BoletoBox = styled.div`
  width: 320px;
  height: 450px;
  background-color: white;
`

function Pix({ request }) {
  const sinalValue = request.price * 0.3
  return (
    <>
      <Header />
      <Box>
        <h1>Segue abaixo a chave pix para transferencia:</h1>
        <h2>Email: riusonvitor@yahoo.com.br</h2>
        <h1>BANCO ITAU</h1>
        <h2>Valor: R$ {sinalValue.toFixed(2)}</h2>
        <div>
          <p>AO FINALIZAR A OPERAÇÃO, FAVOR ENVIAR <br /> O COMPROVANTE PARA O NUMERO:</p>
          <h2>Whatsapp: (31)97588-1152</h2>
        </div>
        <span>ATENÇÃO: O pedido só sera confirmado após o envio do comprovante para o numero citado acima!</span>
        <h1>Obrigado pela confiança!</h1>
      </Box>
    </>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  h2{
    font-weight: bold;
  }
  div{
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    text-align: center;
    gap: 10px;
  }
  span{
    padding-top: 30px;
    color: red;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
`

function Ted({ request }) {
  const sinalValue = request.price * 0.3
  return (
    <>
      <Header />
      <Box>
        <h1>Segue abaixo os dados bancarios para TED ou DEPOSITO:</h1>
        <h2>Nome: Riuson Vitor de Oliveira</h2>
        <h2>Cpf: 550.329.666-49</h2>
        <h2>BANCO ITAU - 341</h2>
        <h2>Ag: 4255</h2>
        <h2>Cc: 01128-2</h2>
        <h2>Valor: R$ {sinalValue.toFixed(2)}</h2>
        <div>
          <p>AO FINALIZAR A OPERAÇÃO, FAVOR ENVIAR <br /> O COMPROVANTE PARA O NUMERO:</p>
          <h2>Whatsapp: (31)97588-1152</h2>
        </div>
        <span>ATENÇÃO: O pedido só sera confirmado após o envio do comprovante para o numero citado acima!</span>
        <h1>Obrigado pela confiança!</h1>
      </Box>
    </>
  )
}