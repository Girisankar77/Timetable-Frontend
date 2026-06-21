function Profile() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 Admin Profile</h1>

      <div
        style={{
          maxWidth: "500px",
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h3>Profile Information</h3>

        <p>
          <strong>Name:</strong> Admin User
        </p>

        <p>
          <strong>Email:</strong> admin@school.com
        </p>

        <p>
          <strong>Role:</strong> Administrator
        </p>

        <p>
          <strong>Phone:</strong> +91 9876543210
        </p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;