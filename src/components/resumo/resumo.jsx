import "./resumo.css";
import { IconName } from "react-icons/go";
import { GoTrashcan } from "react-icons/go";
import Card from "../card/card";

function Resumo({ setFormArray, formArray }) {
  return (
    <div>
      <h2 className="resumo">Resumo financeiro </h2>
      <Card setFormArray={setFormArray} formArray={formArray} />
    </div>
  );
}

export default Resumo;
