import "./style.css";
import {useNavigate} from "react-router-dom";

export function CreateSeries() {
  const navigate = useNavigate();

  return (
    <div className="createseries-wrapper">
      <h4 className="createseries-title">Adicione uma nova série!</h4>

      <form className="createseries-form">
        <div className="form-group">
          <label for="name">Nome da Série:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Digite o nome da série"
            required
          />
        </div>

        <div className="form-group">
          <label for="date">Data que Assistiu:</label>
          <input type="date" class="form-control" id="date" required />
        </div>

        <div className="form-group">
          <label for="genre">Gênero:</label>
          <select className="form-control" id="genre">
            <option>alugmacoisa</option>
          </select>
        </div>

        <div className="form-group">
          <label for="review">Review:</label>
          <textarea
            className="form-control"
            id="review"
            rows="3"
            placeholder="Escreva o que achou da série"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="image">Link da Imagem de Capa:</label>
          <input
            type="text"
            className="form-control"
            id="image"
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
