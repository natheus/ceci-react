import React from "react";
import Profile from "./Profile/Profile";
import Footerbg from "./Footerbg/Footerbg";
import Header from "./Header/Header"
import Portifolio from "./Portifolio/Portifolio";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer"
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footerbg />
      <Portifolio />
      <ContactForm />
      <Footer />
    </div>
  );
}
