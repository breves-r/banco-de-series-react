import "./style.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export function CreateSeries() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var series = JSON.parse(localStorage.getItem("series") || "[]");
    series.push(inputs);
    
    localStorage.setItem(
      'series',
      JSON.stringify(series)
    );

    navigate("/");
  }

  return (
    <div className="createseries-wrapper">
      <h4 className="createseries-title">Adicione uma nova série!</h4>

      <form className="createseries-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome da Série:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={inputs.name || ""} 
            onChange={handleChange}
            placeholder="Digite o nome da série"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Data que Assistiu:</label>
          <input type="date" className="form-control" id="date" name="date" value={inputs.date || ""} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Gênero:</label>
          <select className="form-control" id="genre" name="genre" value={inputs.genre || ""} onChange={handleChange}>
            <option value="Ação">Ação</option>
            <option value="Animação">Animação</option>
            <option value="Aventura">Aventura</option>
            <option value="Comédia">Comédia</option>
            <option value="Documentário">Documentário</option>
            <option value="Drama">Drama</option>
            <option value="Reality">Reality</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Terror">Terror</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            className="form-control"
            id="review"
            rows="3"
            placeholder="Escreva o que achou da série"
            name="review"
            value={inputs.review || ""}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Link da Imagem de Capa:</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={inputs.image || ""} 
            onChange={handleChange}
            placeholder="Dimensões: 680x1000"
            required
          />
        </div>

        <div className="createseries-button">
          <button className="createseries-button-back btn" onClick={() => navigate("/")}>Voltar</button>
          <button className="createseries-button-add btn" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}
