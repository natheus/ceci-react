import React from "react";
import "./Portifolio.css"

export default function Portifolio() {
  return (
    <div className="portifolio-container">
      <div id="portifolio">
        <div class="container-fluid text-center margin">
          <h3 class="margin title">Portifólio</h3>
          <div class="container">
            <div class="row">
              <div className="img01" class="col-lg-6">
                <p>
                  Separei os 5 pontos mais importantes: 1- 🌈 Peleta de cores: A
                  neurociência já comprovou que coisas repetitivas nos deixam
                  mais confortáveis e nos passam mais segurança. Se tu fica
                  mudando de paleta todo mês qual a impressão que está passando?
                </p>
                <a
                  href="https://www.instagram.com/p/CYRH-Htr5Zg/"
                  target="_blank"
                >
                  <img src={require("../../../assets/Home/img01.PNG")} width="100%" />
                </a>
              </div>
              <div class="col-lg-6">
                <p>
                  As cores podem dizer muito sobre um post ou anúncio. Elas não
                  podem ser escolhidas apenas porque gostamos delas. Cada cor
                  desperta um sentimento e dependendo da mensagem que você
                  deseja passar poderá escolher cores erradas ou certas.
                </p>
                <a
                  href="https://www.instagram.com/p/CVoHq1OvYj-/"
                  target="_blank"
                >
                  <img src={require("../../../assets/Home/img02.PNG")} width="100%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
