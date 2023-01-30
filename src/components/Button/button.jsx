import "./button.css";
function Button({ setShowFront }) {
  return (
    <button onClick={() => setShowFront(true)} className="button__inicio">
      Início
    </button>
  );
}

export default Button;
