import React from "react";
import logo from "./assets/icon.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="content">
        <img src={logo} alt="Escola Paulista de Medicina" />

        <h1>Suporte, Dúvidas, Sugestões ou Criticas? Entre em contato!</h1>

        <span>E-mail: cardioscaapp@gmail.com</span>

        <div className="nameContainer">
          <span>Mauro Guimarães</span>
        </div>
      </div>
    </div>
  );
}

export default App;
