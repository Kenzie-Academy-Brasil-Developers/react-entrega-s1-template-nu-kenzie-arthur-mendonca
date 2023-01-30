import "./header.css";
import Button from "../Button/button";

function Header({ setShowFront }) {
  return (
    <header className="dashboard__header">
      <div className="header__div-up">
        {" "}
        <p className="nu__word">
          Nu <span className="kenzie__word">Kenzie</span>
        </p>
      </div>
      <div className="header__div-down">
        <Button setShowFront={setShowFront} />
      </div>
    </header>
  );
}

export default Header;
