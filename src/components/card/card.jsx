import "./card.css";
import { GoTrashcan } from "react-icons/go";

function Card({ setFormArray, formArray }) {
  function removeData(dataID) {
    const filteredList = formArray.filter((data) => data.id !== dataID);
    setFormArray(filteredList);
  }
  return (
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
  );
}

export default Card;
