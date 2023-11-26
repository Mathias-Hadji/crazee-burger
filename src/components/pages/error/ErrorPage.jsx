import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>Retourner vers la page d'accueil</button>
      </Link>
    </>
  );
}
