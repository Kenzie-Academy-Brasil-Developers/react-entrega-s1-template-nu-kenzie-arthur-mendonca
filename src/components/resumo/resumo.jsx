import "./resumo.css";
import { IconName } from "react-icons/go";
import { GoTrashcan } from "react-icons/go";

function Resumo({ setFormArray, formArray }) {
  // const showValue = () => {
  //   return console.log(formArray.valor);
  // };
  // showValue();
  function removeData(dataID) {
    const filteredList = formArray.filter((data) => data.id !== dataID);
    setFormArray(filteredList);
  }

  const reduceAmount = () => {
    return formArray.map((e) => console.log(e));
  };

  const show = () => {
    return reduceAmount;
  };
  show();

  return (
    <div>
      <h2 className="resumo">Resumo financeiro </h2>
      <div>
        {formArray.length === 0 && (
          <p className="no__transaction-text"> Você ainda não tem transações</p>
        )}
        {formArray.length > 0 &&
          formArray.map((e) => (
            <ul className="budget__ul">
              {e.categoria === "saida" && (
                <li className="li__saida" key={formArray.id}>
                  <div className="desc__value-div">
                    <p className="description__text">{e.descricao}</p>{" "}
                    <p>R$ {e.valor}</p>
                  </div>
                  <div>{e.categoria}</div>
                  <button
                    onClick={() => removeData(e.id)}
                    className="remove__button"
                  >
                    <GoTrashcan />
                  </button>
                </li>
              )}
              {e.categoria === "entrada" && (
                <li className="li__entrada" key={formArray.id}>
                  <div className="desc__value-div">
                    <p className="description__text">{e.descricao}</p>{" "}
                    <p>R$ {e.valor}</p>
                  </div>
                  <div>{e.categoria}</div>
                  <button
                    onClick={() => removeData(e.id)}
                    className="remove__button"
                  >
                    <GoTrashcan />
                  </button>
                </li>
              )}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Resumo;
