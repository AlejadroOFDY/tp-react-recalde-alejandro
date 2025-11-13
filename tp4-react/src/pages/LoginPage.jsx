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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="email"
                    value={value.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    value={value.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Iniciar Sesión
                </button>
                <div>
                  <p>
                    ¿No tienes una cuenta?
                    <a href="/register"> Registrate</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
