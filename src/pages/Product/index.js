import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header"
import styled from "styled-components";
import requestContext from '../../contexts/requestContext';
import TokenContext from '../../contexts/tokenContext'

export default function Products() {
  const [product, setProduct] = useState({})
  const [amount, setAmount] = useState(0)
  const { idProduct } = useParams();
  const navigate = useNavigate()
  let total = (product.price/100)*amount
  let price = product.price / 100
  const {persistCart} = useContext(requestContext)
  const { token } = useContext(TokenContext)
  
  useEffect(() => {
    const promise = api.getProductById(idProduct)
    promise.then((res) => {
      setProduct(res.data[0])
    }).catch((error) => {
      const erro = error.response.data
      alert(erro)
    })
  }, [idProduct])

  function handleSubmit(){
    persistCart({
      amount: amount,
      price: total,
      product: product
    })
    if (token){
      navigate("/ordered")
    }else{
      navigate("/sign-up")
    }
  }

  return (
    <>
      <Header />
      <Box>
        <Image url={product.image} />
        <p>Especie: {product.name}</p>
        <p>Preço: R$ {price.toFixed(2)}</p>
        <p>Padrão: {product.description}</p>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Quantidade"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit"> Comprar </button>
        </Form>
        <h1>Total = R$ {total.toFixed(2)}</h1>
      </Box>
    </>
  )
}

const Box = styled.div`
  background-color: #7EA879;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  gap: 20px;
  h1{
    font-weight: bold;
  }
`

const Image = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
  border-radius: 15px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  input{
    width: 100px;
    height: 25px;
    border-radius: 15px;
    border:none;
    text-align: center;
  }

  button{
    background-color: #528654;
    border: none;
    color: white;
    width:100px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
`