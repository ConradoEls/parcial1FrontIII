import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    carrera: "",
    documento: "",
    centro: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      estudiante.nombre.length > 3 &&
      !(estudiante.nombre.charAt(0) === " ") &&
      estudiante.carrera.length >= 6
    ) {
      setEnviado(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setEstudiante({ ...estudiante, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Carga de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 50px 22px 50px",
          }}
        >
          <label>Ingrese nombre y apellido:</label>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            name="nombre"
            onChange={handleChange}
          />
          <label>Ingrese documento:</label>
          <input
            type="number"
            placeholder="DNI"
            name="documento"
            onChange={handleChange}
          />
          <label>Ingrese carrera/curso:</label>
          <input
            type="text"
            placeholder="Carrera o curso"
            name="carrera"
            onChange={handleChange}
          />
          <label>Ingrese centro educativo:</label>
          <input
            type="text"
            placeholder="Centro educativo"
            name="centro"
            onChange={handleChange}
          />
        </div>
        <button>Cargar</button>
      </form>
      {enviado && <Card estudiante={estudiante} />}
      {error && (
        <h3 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta.
        </h3>
      )}
    </>
  );
}
export default App;
