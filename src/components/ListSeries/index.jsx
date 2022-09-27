import "./style.css";
import { useNavigate } from "react-router-dom";

export function ListSeries() {
  const navigate = useNavigate();

  const listaSerie = [
    {
      name: "The Handmais Tale",
      date: "25-09-2022",
      genre: "Drama",
      review: "Muito boa",
      image: "https://bancodeseries.com.br/images/posters/11942.jpg",
    },
  ];

  return (
    <div className="listseries-wrapper">
      <button
        className="listseries-button btn"
        onClick={() => navigate("/create")}
      >
        Adicionar Série
      </button>

      <div className="series">
        {listaSerie.map((serie) => (
        <div className="card">
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
      </div>

      <div className="text-message">
        <p>Não há séries adicionadas</p>
      </div>
    </div>
  );
}
