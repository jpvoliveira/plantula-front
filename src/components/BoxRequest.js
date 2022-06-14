import styled from "styled-components"

export default function BoxRequest({ request, amount, setAmount }) {
  function handleAmountRemove() {
    if (request.product.type === 'mudas') {
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
    if (request.product.type === 'mudas') {
      setAmount(amount + 1000)
    } else {
      setAmount(amount + 1)
    }
  }

  let priceUpdate = (request.product.price / 100) * amount

  return (
    <ContainerRequest>
      <ImageBox url={request.product.image} />
      <ProductData>
        <h1>{request.product.name}</h1>
        <h3>{request.product.description}</h3>
        <h2>R$ {priceUpdate}</h2>
      </ProductData>
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
    </ContainerRequest>
  )
}

const ContainerRequest = styled.div`
  height: 98px;
  width: 350px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  button{
    height: 30px;
  }
  h1{
    font-weight: bold;
  }
  h3{
    font-size: 10px;
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
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
`

const Quanty = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  right: 5px;
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
  input{
    width: 50px;
    height: 25px;
    border:none;
    text-align: center;
    font-size: 15px;
  }
`