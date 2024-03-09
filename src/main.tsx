import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import Header from "./components/Shared/Header.tsx";
import Footer from "./components/Shared/Footer.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Register from "./pages/Register/Register.tsx";
import About from "./pages/About/About.tsx";
import Login from "./pages/Login/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Book from "./pages/Book/Book.tsx";
import Books from "./pages/Books/Books.tsx";
import "./index.css";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registrarme" element={<Register />} />
          <Route path="/libros" element={<Books />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="/libros/:NombreLibro" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
    <Toaster />
  </React.StrictMode>
);
