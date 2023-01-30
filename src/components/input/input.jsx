import "./input.css";

function Input({ formData, setFormData }) {
  return (
    <input
      value={formData.descricao}
      type="text"
      placeholder="Digite a descrição aqui"
      onChange={(event) =>
        setFormData({ ...formData, descricao: event.target.value })
      }
    />
  );
}

export default Input;
