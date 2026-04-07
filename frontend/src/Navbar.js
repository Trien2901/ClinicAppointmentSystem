import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4">

      <span className="navbar-brand">🏥 Clinic</span>

      <div>
        <Link className="text-white me-3" to="/">Home</Link>
        <Link className="text-white me-3" to="/appointment">Appointment</Link>

        {!user && (
          <>
            <Link className="text-white me-3" to="/login">Login</Link>
            <Link className="text-white me-3" to="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            <span className="text-white me-3">
              👤 {user.username}
            </span>

            {user.role === "Admin" && (
              <Link className="text-white me-3" to="/admin">
                Admin
              </Link>
            )}

            <button className="btn btn-light btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;