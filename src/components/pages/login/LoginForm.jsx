import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`order/${inputValue}`);
    setInputValue("");
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br></br>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        required
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={handleChange}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
