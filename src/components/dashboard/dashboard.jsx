import "./dashboard.css";
import App from "../../App";
import { useState } from "react";
import Form from "../form/form";
import Header from "../header/header";

function Dashboard({ setShowFront }) {
  return (
    <div className="page__wrapper-dashboard">
      <Header setShowFront={setShowFront} />
      <main className="dashboard__main">
        <Form />
      </main>
    </div>
  );
}

export default Dashboard;
