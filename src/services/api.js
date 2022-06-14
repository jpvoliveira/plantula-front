import axios from "axios";

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'https://git.heroku.com/plantula-api.git';

function createConfig(token) {
  return {
    headers: {
      'Authorization': token
    }
  }
}

async function getProducts({ category }) {
  const products = await axios.get(`${BASE_URL}/products/${category}`)
  return products
}

async function getProductById(idProduct) {
  const product = await axios.get(`${BASE_URL}/product/${idProduct}`)
  return product
}

async function signUp(userData) {
  await axios.post(`${BASE_URL}/sign-up`, { userData })
}

async function signIn(userData) {
  const token = await axios.post(`${BASE_URL}/sign-in`, { userData })
  return token
}

async function findUser(token) {
  const userData = await axios.get(`${BASE_URL}/finduser`, createConfig(token))
  return userData
}

async function postOrder(orderData) {
  axios.post(`${BASE_URL}/order`, { orderData })
}

const api = {
  getProducts,
  getProductById,
  signUp,
  signIn,
  findUser,
  postOrder
}

export default api