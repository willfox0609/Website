import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        My App
      </Link>

      <div className="ms-auto">
        <Link to="/settings" className="text-light fs-4">
          <i className="bi bi-gear"></i>
        </Link>
      </div>
    </nav>
  );
}
