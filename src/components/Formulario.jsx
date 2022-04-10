import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setNombre }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });
  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Nombre ogligatorio",
        icon: "error",
      });
    }

    setNombre(nombre.trim().toLowerCase());

    reset();
  };

  return (
    <div className="card mb-3  "> 
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          value={nombre}
          onChange={handleChange}
          className="form-control "
          name="nombre"
          placeholder="Ingrese Character"
        />
        <button className="btn btn-outline-dark " id="button-addon2" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
