import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarPersonajes from "./components/PintarPersonajes";

const App = () => {
  const [nombre, setNombre] = useState("");

  return (
    <div className="container text-center mt-2">
      <h1>Api Rick y Morty</h1>
      <button className="btn btn-outline-success my-2" onClick={() => setNombre("")}>
        Home
      </button>

      <Formulario setNombre={setNombre} />
      <PintarPersonajes nombre={nombre} />
    </div>
  );
};

export default App;
