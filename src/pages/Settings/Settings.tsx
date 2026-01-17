import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SettingsContext } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { settings, updateSettings } = useContext(SettingsContext);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    // Clear all settings
    updateSettings({
      displayName: "",
      email: "",
      emailNotif: true,
      smsNotif: false,
      pushNotif: true,
      accountId: "",
      memberSince: "",
      isLoggedIn: false,
    });

    // Clear localStorage entirely (optional but recommended)
    localStorage.removeItem("appSettings");

    // Redirect to signup or login
    navigate("/");
  };

  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="position-sticky" style={{ top: "90px" }}>
            <div className="list-group shadow-sm">
              <button
                className="list-group-item list-group-item-action"
                onClick={() => scrollToSection("profile-section")}
              >
                Profile
              </button>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => scrollToSection("notifications-section")}
              >
                Notifications
              </button>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => scrollToSection("account-section")}
              >
                Account Info
              </button>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => scrollToSection("appearance-section")}
              >
                Appearance
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* PROFILE SECTION */}
          <div
            id="profile-section"
            className="p-4 border rounded shadow-sm mb-4"
          >
            <h4 className="mb-3">Profile</h4>

            <div className="mb-3">
              <label className="form-label">Display Name</label>
              <input
                type="text"
                className="form-control"
                value={settings.displayName}
                onChange={(e) =>
                  updateSettings({ displayName: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={settings.email}
                onChange={(e) => updateSettings({ email: e.target.value })}
              />
            </div>
          </div>

          {/* NOTIFICATIONS SECTION */}
          <div
            id="notifications-section"
            className="p-4 border rounded shadow-sm mb-4"
          >
            <h4 className="mb-3">Notifications</h4>

            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.emailNotif}
                onChange={() =>
                  updateSettings({ emailNotif: !settings.emailNotif })
                }
              />
              <label className="form-check-label">Email Notifications</label>
            </div>

            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.smsNotif}
                onChange={() =>
                  updateSettings({ smsNotif: !settings.smsNotif })
                }
              />
              <label className="form-check-label">SMS Notifications</label>
            </div>

            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.pushNotif}
                onChange={() =>
                  updateSettings({ pushNotif: !settings.pushNotif })
                }
              />
              <label className="form-check-label">Push Notifications</label>
            </div>
          </div>

          {/* ACCOUNT INFO SECTION */}
          <div
            id="account-section"
            className="p-4 border rounded shadow-sm mb-4"
          >
            <h4 className="mb-3">Account Info</h4>

            <div className="mb-3">
              <label className="form-label">Account ID</label>
              <input
                type="text"
                className="form-control"
                value={settings.accountId}
                onChange={(e) => updateSettings({ accountId: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Member Since</label>
              <input
                type="text"
                className="form-control"
                value={settings.memberSince}
                onChange={(e) =>
                  updateSettings({ memberSince: e.target.value })
                }
              />
            </div>

            <button
              className="btn btn-danger mt-2"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Delete Account
            </button>
          </div>

          {/* APPEARANCE SECTION */}
          <div
            id="appearance-section"
            className="p-4 border rounded shadow-sm mb-4"
          >
            <h4 className="mb-3">Appearance</h4>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE ACCOUNT MODAL */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Account Deletion</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              This action cannot be undone. Are you sure you want to delete your
              account?
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>

              <button
                className="btn btn-danger"
                onClick={handleDeleteAccount}
                data-bs-dismiss="modal"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
