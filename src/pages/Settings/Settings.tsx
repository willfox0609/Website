import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SettingsContext } from "../../context/SettingsContext";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { settings, updateSettings } = useContext(SettingsContext);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="list-group shadow-sm">
            <a className="list-group-item list-group-item-action active">
              General
            </a>
            <a className="list-group-item list-group-item-action">Profile</a>
            <a className="list-group-item list-group-item-action">
              Notifications
            </a>
            <a className="list-group-item list-group-item-action">
              Account Info
            </a>
            <a className="list-group-item list-group-item-action">Appearance</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Profile */}
          <div className="p-4 border rounded shadow-sm mb-4">
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

          {/* Notifications */}
          <div className="p-4 border rounded shadow-sm mb-4">
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

          {/* Account Info */}
          <div className="p-4 border rounded shadow-sm mb-4">
            <h4 className="mb-3">Account Info</h4>

            <div className="mb-3">
              <label className="form-label">Account ID</label>
              <input
                type="text"
                className="form-control"
                value={settings.accountId}
                //disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Member Since</label>
              <input
                type="text"
                className="form-control"
                value={settings.memberSince}
                //disabled
              />
            </div>

            <button className="btn btn-danger mt-2">Delete Account</button>
          </div>

          {/* Appearance */}
          <div className="p-4 border rounded shadow-sm mb-4">
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
    </div>
  );
}
