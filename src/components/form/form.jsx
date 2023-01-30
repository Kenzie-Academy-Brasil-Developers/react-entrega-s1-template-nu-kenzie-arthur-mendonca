import { useState } from "react";
import "./form.css";
import Resumo from "../resumo/resumo";
import Total from "../total/total";
import Input from "../input/input";

function Form() {
  const [dataID, setDataID] = useState(1);
  const [formArray, setFormArray] = useState([]);
  const [formData, setFormData] = useState({
    descricao: "",
    valor: 0.0,
    categoria: "entrada",
    id: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.categoria === "saida" && formData.valor > 0) {
      formData.valor *= -1;
    }
    if (formData.categoria === "entrada" && formData.valor < 0) {
      formData.valor *= -1;
    }
    if (formData.descricao !== "" && formData.valor !== "") {
      setFormData({ ...formData, id: dataID });
      setDataID(dataID + 1);
      setFormArray([...formArray, formData]);
    }
  };

  return (
    <div>
      <div className="form-resumo__wrapper">
        <form className="input__form" onSubmit={handleSubmit}>
          <div className="div__descricao">
            <p>Descrição</p>
            <Input formData={formData} setFormData={setFormData} />

            <p>Ex: compra de roupa</p>
          </div>

          <div className="value__div">
            <div className="valor__div">
              <label htmlFor="valor">Valor</label>
              <div className="valor__inside-div">
                <input
                  name="valor"
                  type="text"
                  value={formData.valor}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      valor: Number(event.target.value),
                    })
                  }
                />
                <p className="erre-cifrao">R$</p>
              </div>
            </div>
            <div className="tipoDeValor__div">
              <p>Tipo de valor</p>
              <select
                name="select__categoria"
                id="select"
                onChange={(event) =>
                  setFormData({ ...formData, categoria: event.target.value })
                }
              >
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
          <Resumo setFormArray={setFormArray} formArray={formArray} />
        </section>
      </div>
      <section className="totalSum__section">
        <Total formArray={formArray} />
      </section>
    </div>
  );
}

export default Form;
