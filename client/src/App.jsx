import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Article from "./pages/Article"
import Articledetails from "./components/Users/Articledetails"


 
import Contact from "./pages/contact";
import Footer from "./components/footer";
import AddPost from "./components/Admin/post";
import AdminPannel from "./pages/AdminPannel";
<<<<<<< HEAD
=======
import RegisterPopup from "./components/Admin/Registerpopup"

>>>>>>> 10c133026609290957410e1c25263a9e0e31e9eb

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/article" element={<Article/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin/dashboard" element={<AdminPannel/>} />
          <Route path="/readmore" element={<Articledetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/addpost" element={<AddPost/>} />
          
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
