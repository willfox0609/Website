import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export default function Navbar() {
  const { updateSettings } = useContext(SettingsContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    updateSettings({ isLoggedIn: false });
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        My App
      </Link>

      <div className="ms-auto d-flex align-items-center gap-3">
        {/* Settings Icon */}
        <Link to="/settings" className="text-light fs-4">
          <i className="bi bi-gear"></i>
        </Link>

        {/* Logout Button */}
        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
