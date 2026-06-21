import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.grid}>

        <Link style={styles.card} to="/admin/teachers">
          👨‍🏫 Teachers
        </Link>

        <Link style={styles.card} to="/admin/students">
          🎓 Students
        </Link>

        <Link style={styles.card} to="/admin/classes">
          🏫 Classes
        </Link>

        <Link style={styles.card} to="/admin/subjects">
          📚 Subjects
        </Link>

        <Link style={styles.card} to="/admin/timetable">
          🗓 Timetable
        </Link>

        <Link style={styles.card} to="/admin/attendance">
          📊 Attendance
        </Link>

        <Link style={styles.card} to="/admin/leave-management">
          🏖 Leave
        </Link>

        <Link style={styles.card} to="/admin/notifications">
          🔔 Notifications
        </Link>

        <Link style={styles.card} to="/admin/reports">
          📈 Reports
        </Link>

        <Link style={styles.card} to="/admin/settings">
          ⚙ Settings
        </Link>

        <Link style={styles.card} to="/admin/profile">
          👤 Profile
        </Link>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "20px",
    background: "#2563eb",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Dashboard;