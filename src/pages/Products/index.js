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
      <Container>
        {products.map((item)=> <Product data={item}/>)}
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: #7DBA84;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  gap: 20px;
`