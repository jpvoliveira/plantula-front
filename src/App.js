import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Ordered from "./pages/Ordered";
import Payment from "./pages/Payment";
import requestContext from './contexts/requestContext';
import TokenContext from "./contexts/tokenContext";

export default function App() {
  const localCart = localStorage.getItem("cart")
  const [request, setRequest] = useState(JSON.parse(localCart))

  const localToken = localStorage.getItem("auth")
  const [token, setToken] = useState(localToken)

  function persistToken(token){
    setToken(token)
    localStorage.setItem("auth", token)
  }

  function persistCart(request){
    setRequest(request)
    localStorage.setItem("cart", JSON.stringify(request))
  }

  return (
    <TokenContext.Provider value={{ token, setToken, persistToken }}>
      <requestContext.Provider value={{request, setRequest, persistCart}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/products/:idProduct" element={<Product />}></Route>
            <Route path="/sign-in" element={<SignIn/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route path="/ordered" element={<Ordered/>}></Route>
            <Route path="/ordered/payment/:type" element={<Payment/>}></Route>
          </Routes>
        </BrowserRouter>
      </requestContext.Provider>
      </TokenContext.Provider>
  );
}