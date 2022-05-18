import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import Product from "../../components/Product"
import api from "../../services/api"

export default function Products() {
  const [products, setProducts] = useState("")

  useEffect(()=>{
    const promise = api.getProducts()
    promise.then((res)=>{
      setProducts(res.data)
    }).catch((error)=>{
      const erro = error.response.data
      alert(erro)
    })
  }, [])

  if (!products) return <p>Loading</p>

  return (
    <>
      <Header />
      <Box>
        <Container>
          {products.map((item)=> <Product data={item}/>)}
        </Container>
      </Box>
    </>
  )
}

const Container = styled.div`
  background-color: #7EA879;
  display: flex;
  flex-wrap: wrap; 
  padding-top: 20px;
  width: 400px;

  gap: 20px;
`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`