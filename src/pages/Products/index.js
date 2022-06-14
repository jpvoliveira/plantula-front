import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import Product from "../../components/Product"
import api from "../../services/api"
import BoxCategory from "../../components/BoxCategory"

export default function Products() {
  const [products, setProducts] = useState("")
  const [category, setCategory] = useState('mudas')

  useEffect(() => {
    const promise = api.getProducts({ category })
    promise.then((res) => {
      setProducts(res.data)
    }).catch((error) => {
      const erro = error.response.data
      alert(erro)
    })
  }, [category])
  console.log(products)
  if (!products) return <p>Loading</p>

  return (
    <>
      <Header />
      <Box>
        <BoxCategory category={category} setCategory={setCategory} />
        <Container>
          {products.map((item) => <Product data={item} />)}
        </Container>
      </Box>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  width: 400px;
  height: 580px;
  overflow-y: scroll;
  gap: 20px;
  margin-top: 30px;
`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
