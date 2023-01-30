import "./front-page.css";
import { useState } from "react";
import App from "../../App";

function FrontPage({ setState }) {
  // const [page, setPage] = useState();

  return (
    <main className="main__wrapper">
      <div className="main__sub-wrapper">
        <div className="title__wrapper">
          <header className="header__wrapper">
            <p className="nu__word">
              Nu <span className="kenzie__word-front">Kenzie</span>
            </p>
          </header>
          <section className="frontPage__section">
            <h1>Centralize o controle de suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button className="iniciar__button" onClick={() => setState(false)}>
              Iniciar
            </button>
          </section>
        </div>
        <div className="lower__div"> </div>
      </div>
    </main>
  );
}

export default FrontPage;
