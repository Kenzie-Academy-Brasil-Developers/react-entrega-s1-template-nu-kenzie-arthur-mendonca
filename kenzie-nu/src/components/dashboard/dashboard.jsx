import "./dashboard.css";
import App from "../../App";
import { useState } from "react";

function Dashboard({ setState }) {
  return (
    <div className="page__wrapper-dashboard">
      <header className="dashboard__header">
        <div className="header__div-up">
          {" "}
          <p className="nu__word">
            Nu <span className="kenzie__word">Kenzie</span>
          </p>
        </div>
        <div className="header__div-down">
          <button className="button__inicio" onClick={() => setState(true)}>
            Início
          </button>
        </div>
      </header>
      <main className="dashboard__main">
        <form className="input__form">
          <div className="div__descricao">
            <p>Descrição</p>
            <input type="text" placeholder="Digite a descrição aqui" />
            <p>Ex: compra de roupa</p>
          </div>
          <div className="value__div">
            <div className="valor__div">
              <p>Valor</p>
              <div className="valor__inside-div">
                <input type="text" />
                <p className="erre-cifrao">R$</p>
              </div>
            </div>
            <div className="tipoDeValor__div">
              <p>Tipo de valor</p>
              <select name="entrada__valor" id="select">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>
          </div>
          <button className="inserir__button" type="submit">
            Inserir Valor
          </button>
        </form>
        <section className="resumo__section">
          <h2>Resumo financeiro</h2>
          <p>Você ainda não possui nenhum lançamento.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
