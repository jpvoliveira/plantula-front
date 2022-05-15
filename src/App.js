import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}