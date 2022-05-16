import axios from "axios";

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}

async function getProducts() {
  const products = await axios.get(`${BASE_URL}/products`)
  return products
}

async function getProductById(idProduct) {
  const product = await axios.get(`${BASE_URL}/product/${idProduct}`)
  return product
}

const api = {
  getProducts,
  getProductById
}

export default api