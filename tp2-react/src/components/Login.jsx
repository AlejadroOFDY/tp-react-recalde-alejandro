import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  //   const {username, password} = useForm; otra forma
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(form.username);
    console.log("Datos del login", form);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        // value={username} esta sería la otra forma
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      ></input>
      <button onSubmit={handleReset}>Iniciar Sesión</button>
    </form>
  );
};
