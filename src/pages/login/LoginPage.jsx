import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Prevent page reload if using a standard form submission
    e.preventDefault(); 
    if (role === "student") navigate("/student");
    else if (role === "teacher") navigate("/teacher");
    else navigate("/admin");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>School Timetable System</h1>

        <form onSubmit={handleLogin} className="form-layout">
          {/* ROLE */}
          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* CLASS (student + teacher only) */}
          {(role === "student" || role === "teacher") && (
            <div className="form-group">
              <label>Class</label>
              <select>
                <option>Select Class</option>
                <option>CSE A</option>
                <option>CSE B</option>
                <option>CSE C</option>
              </select>
            </div>
          )}

          {/* USERNAME */}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>

          {/* LOGIN BUTTON */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;