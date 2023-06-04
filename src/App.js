import Header from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import Home from "./pages/Home";
import GeneratePar from "./components/GeneratePar";
import GenerateCode from "./components/Code";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GenerateImage from "./components/GenerateImage";
import Google from "./components/Google";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Google />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route exact path="/genpara/:id" element={<GeneratePar />} />
          <Route exact path="/gencode/:id" element={<GenerateCode />} />
          <Route exact path="/genimage" element={<GenerateImage />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
