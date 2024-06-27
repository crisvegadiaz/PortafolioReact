import errorMin from "../img/error-min.svg";
import { Link } from "react-router-dom";
import "../style/error.css";

function Error404() {
  return (
    <main className="error">
      <div className="error__text">
        <h1>Error 404</h1>
        <button>
          <Link to="/">
            <i class="fa-solid fa-arrow-left"></i> Inicio
          </Link>
        </button>
      </div>
      <img src={errorMin} alt="error" width="611" height="509" />
    </main>
  );
}

export default Error404;
