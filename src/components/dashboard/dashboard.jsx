import "./dashboard.css";
import App from "../../App";
import { useState } from "react";
import Form from "../form/form";

function Dashboard({ setShowFront }) {
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
          <button className="button__inicio" onClick={() => setShowFront(true)}>
            Início
          </button>
        </div>
      </header>
      <main className="dashboard__main">
        <Form />
      </main>
    </div>
  );
}

export default Dashboard;
