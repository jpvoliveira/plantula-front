import styled from "styled-components"

export default function BoxRequest({request}) {
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