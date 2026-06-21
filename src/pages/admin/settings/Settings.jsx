import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <h1>Settings</h1>

      <Link to="/admin/settings/school">
        <button>School Settings</button>
      </Link>

      <br /><br />

      <div>
        <h3>System Settings</h3>
        <p>Manage application preferences and configuration.</p>
      </div>
    </div>
  );
}

export default Settings;