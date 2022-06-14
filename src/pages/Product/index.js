import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header"
import styled from "styled-components";
import requestContext from '../../contexts/requestContext';
import TokenContext from '../../contexts/tokenContext'

export default function Products() {
  const [product, setProduct] = useState({})
  const [amount, setAmount] = useState(1)
  const { idProduct } = useParams();
  const navigate = useNavigate()
  let total = (product.price / 100) * amount
  let price = product.price / 100
  const { persistCart } = useContext(requestContext)
  const { token } = useContext(TokenContext)


  useEffect(() => {
    const promise = api.getProductById(idProduct)
    promise.then((res) => {
      setProduct(res.data[0])
      if (res.data[0].type === 'mudas') setAmount(1000)
    }).catch((error) => {
      const err = error.response
      alert(err)
    })
  }, [idProduct])

  function handleAmountRemove() {
    if (product.type === 'mudas') {
      if (amount > 1000) {
        setAmount(amount - 1000)
      } else {
        setAmount(1000)
      }
    } else {
      if (amount > 1) {
        setAmount(amount - 1)
      } else {
        setAmount(1)
      }
    }
  }

  function handleAmountAdd() {
    if (product.type === 'mudas') {
      setAmount(amount + 1000)
    } else {
      setAmount(amount + 1)
    }
  }

  function handleSubmit() {
    persistCart({
      amount: amount,
      price: total,
      product: product
    })
    if (token) {
      navigate("/ordered")
    } else {
      navigate("/sign-up")
    }
  }

  return (
    <>
      <Header return={true} />
      <Box>
        <Data>
          <Title>{product.name}</Title>
          <Image url={product.image} />
          <h2>R$ {price.toFixed(2)}</h2>
          <Infos>
            <span>Descrição</span>
            <p>{product.description}</p>
          </Infos>
        </Data>
        <Form onSubmit={handleSubmit}>
          <Quanty>
            <div className="remove" onClick={() => handleAmountRemove()}>-</div>
            <input
              type="text"
              placeholder="Quantidade"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <div className="add" onClick={() => handleAmountAdd()}>+</div>
          </Quanty>
          <h1>Total = R$ {total.toFixed(2)}</h1>
          <button type="submit"> COMPRAR </button>
        </Form>
      </Box>
    </>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-family: 'Montserrat';
  gap: 20px;
  align-items: center;
  h2{
    font-size: 25px;
    color: #528654; 
    font-weight: bold;
  }
`

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  span{
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  p{
    font-size: 15px;
  }
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

const Quanty = styled.div`
  display: flex;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #528654;
    color: white;
    font-size: 20px;
  }
  .remove{
    border-radius: 15px 0px 0px 15px;
  }
  .add{
    border-radius: 0px 15px 15px 0px;
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
    width: 80px;
    height: 25px;
    border:none;
    text-align: center;
    font-size: 15px;
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
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
  }
`