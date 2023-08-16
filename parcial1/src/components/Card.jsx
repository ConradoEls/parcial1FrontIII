import "./Card.css";

const Card = ({ estudiante }) => {
  return (
    <div className="card">
      <span>Estudiante:</span>
      <h3>{estudiante.nombre}</h3>
      <div className="info">
        <span>Carrera/curso: {estudiante.carrera}</span>
        <span>Centro educativo: {estudiante.centro}</span>
      </div>
    </div>
  );
};

export default Card;
