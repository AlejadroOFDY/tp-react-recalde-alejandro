import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { value, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserData", JSON.stringify(value));
    alert("Registrado exitosamente");
    handleReset();
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={value.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={value.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={value.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        value={value.firstname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        value={value.lastname}
        onChange={handleChange}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};
