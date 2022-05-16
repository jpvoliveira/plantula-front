import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header"
import styled from "styled-components";

export default function Products() {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams();

  useEffect(() => {
    const promise = api.getProductById(idProduct)
    promise.then((res) => {
      setProduct(res.data[0])
    }).catch((error) => {
      const erro = error.response.data
      alert(erro)
    })
  }, [])

  return (
    <>
      <Header />
      <Box>
        <Image url={product.image}/>
        <p>Especie: {product.name}</p>
        <p>Preço: R$ {product.price/100}</p>
        <p>Padrão: {product.description}</p>
        <input type="qtd" placeholder="Digite a quantidade"/>
        <button>Calcular</button>
      </Box>
    </>
  )
}

const Box = styled.div`
  height: 100vh;
  background-color: #7DBA84;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  gap: 20px;
`

const Image = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
`