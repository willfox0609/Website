import { useContext, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { updateSettings } = useContext(SettingsContext);
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [accountId, setAccountId] = useState("");

  const handleSignup = () => {
    if (!displayName || !email || !accountId) return;

    updateSettings({
      displayName,
      email,
      accountId,
      memberSince: new Date().toLocaleDateString(),
      isLoggedIn: true,
    });

    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h2 className="mb-4 text-center">Create Account</h2>

      <div className="mb-3">
        <label className="form-label">Display Name</label>
        <input
          type="text"
          className="form-control"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Account ID</label>
        <input
          type="text"
          className="form-control"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          placeholder="Choose an Account ID"
        />
      </div>

      <button className="btn btn-primary w-100" onClick={handleSignup}>
        Sign Up
      </button>

      <div className="text-center mt-3">
        <button className="btn btn-link" onClick={() => navigate("/login")}>
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
}
