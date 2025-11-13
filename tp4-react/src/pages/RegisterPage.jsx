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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username"
                    value={value.username}
                    onChange={handleChange}
                  />
                </div>
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
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="firstname"
                    value={value.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    placeholder="lastname"
                    value={value.lastname}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Registrarse
                </button>
                <div>
                  <p>
                    ¿Ya tienes una cuenta?
                    <a href="/login"> Iniciar sesión</a>
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
