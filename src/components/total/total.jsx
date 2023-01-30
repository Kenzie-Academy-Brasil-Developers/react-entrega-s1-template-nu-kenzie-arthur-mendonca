import "./total.css";

function Total({ formArray }) {
  const totalValue = () => {
    return formArray
      .map((e) => e.valor)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  };

  return (
    <div>
      <div className="showSum__div">
        <p className="totalValue__text">Valor total</p>
        <p className="totalValue__text-number">R$ {totalValue()}</p>
      </div>
      <div className="disclaimer__div">
        <span>O valor se refere ao saldo</span>
      </div>
    </div>
  );
}

export default Total;
