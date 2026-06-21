function SchoolSettings() {
  return (
    <div>
      <h1>School Settings</h1>

      <form>
        <div>
          <label>School Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter School Name"
          />
        </div>

        <br />

        <div>
          <label>School Address</label>
          <br />
          <textarea
            rows="4"
            placeholder="Enter School Address"
          />
        </div>

        <br />

        <div>
          <label>Contact Number</label>
          <br />
          <input
            type="text"
            placeholder="Enter Contact Number"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <br />

        <button type="submit">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default SchoolSettings;