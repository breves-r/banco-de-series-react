import "./style.css";
import { useNavigate } from "react-router-dom";

export function ListSeries() {
  const navigate = useNavigate();

  const listaSerie = JSON.parse(localStorage.getItem('series')|| "[]");

  return (
    <div className="listseries-wrapper">
      <button
        className="listseries-button btn"
        onClick={() => navigate("/create")}
      >
        Adicionar Série
      </button>
      
      {!listaSerie.length ? (
      <div className="text-message">
        <p>Não há séries adicionadas</p>
      </div>) : (

      <div className="series">
        {listaSerie.map((serie, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <img
              src={serie.image}
              alt="oi"
              className="poster"
            />
            <span className="text">
              <p>
                <b>{serie.name}</b>
              </p>
              <p>{serie.date}</p>
              <p>{serie.genre}</p>
              <p>{serie.review}</p>
              <button className="delete btn">excluir</button>
            </span>
          </div>
        </div>))}
      </div>) }
    </div>
  );
}
