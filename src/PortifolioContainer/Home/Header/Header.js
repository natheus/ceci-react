import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand marginLeft" href="#">
          <img
          src={require("../../../assets/Home/logo1.png")} height={60}
          alt="no internet connection"
        />
          </a>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#sobremim">
                  Sobre mim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portifolio">
                  Portifólio
                </a>
              </li>
              <li class="nav-item marginRight">
                <a class="nav-link" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
