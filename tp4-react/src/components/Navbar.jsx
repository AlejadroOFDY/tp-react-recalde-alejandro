import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <div className="navbar-brand">Trabajo Práctico N°4 - React</div>
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
