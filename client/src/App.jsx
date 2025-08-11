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


import Sidebar from "./components/Admin/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/article" element={<Article/>} />
          <Route path="/admin/dashboard" element={<Sidebar/>} />
          <Route path="/readmore" element={<Articledetails/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
