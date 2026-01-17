import { useContext, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // prevents page reload

    // Prevent login if no account exists
    if (!settings.accountId || settings.accountId.trim() === "") {
      setError("No account exists. Please sign up first.");
      return;
    }

    if (inputId.trim() === settings.accountId.trim()) {
      updateSettings({ isLoggedIn: true });
      navigate("/home");
    } else {
      setError("Invalid Account ID");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>

      {/* ⭐ Wrap everything in a form so Enter triggers handleLogin */}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Account ID</label>
          <input
            type="text"
            className="form-control"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder="Enter your Account ID"
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">
          Log In
        </button>
      </form>

      <div className="text-center mt-3">
        <button className="btn btn-link" onClick={() => navigate("/signup")}>
          Create an account
        </button>
      </div>
    </div>
  );
}
