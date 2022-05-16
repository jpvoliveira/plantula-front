import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/products/:idProduct" element={<Product />}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}