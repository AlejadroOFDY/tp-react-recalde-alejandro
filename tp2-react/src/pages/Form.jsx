import { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    usuario: "",
    lastname: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      //voy a dejar tal cual el form exeptuando lo que modifique luego.
      ...form,
      //puede venir usuario o password, independientemente de que input se ejecute
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="usuario"
        value={form.usuario}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        value={form.lastname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button onClick={() => setForm({ ...form, usuario: "boton" })}>
        Ver datos
      </button>
    </div>
  );
};
