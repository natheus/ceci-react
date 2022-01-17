import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.instagram.com/cecisbaum/?hl=pt-br"
                target={"_blank"}
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name" id="sobremim">
            <span className="primary-text">
              {" "}
              Olá, eu sou a <span className="highlighted-text">Cecília</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Social Media",
                    1000,
                    "Análise de Perfil",
                    1000,
                    "Estratégias de Marketing",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                🚀 Ajudo EMPREENDEDORES a se posicionarem de forma estratégica
                no digital!
              </span>
            </span>
          </div>
          <div className="col-8 pt-2 mx-auto">
            <a href="https://wa.me/message/K4Z32QBYPZYYK1" target={"_blank"}>
              <button className="btn highlighted-btn">Fale Comigo</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
