import { useForm } from "../hooks/useForm";

export const Register = () => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del registro", form);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        value={form.firstname}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        value={form.lastname}
        onChange={handleChange}
      ></input>
      <button onSubmit={handleReset}>Registrarse</button>
    </form>
  );
};
