import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { value, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const { username, password } = value;

  const handleSubmit = (e, onLogin) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("UserData"));

    if (!storedUser) return alert("No hay usuarios registrados");

    if (
      storedUser.email === value.email &&
      storedUser.password === value.password
    ) {
      localStorage.setItem("isLogged", true);
      navigate("/HomePage");
    } else {
      alert("Credenciales inválidas");
    }
    handleReset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={value.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={value.password}
        onChange={handleChange}
      ></input>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
