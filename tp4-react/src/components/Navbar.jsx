import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <nav>
      <div
        onClick={() => {
          "/home";
        }}
      ></div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
