import { Link } from "react-router-dom";

function Reports() {
  return (
    <div>
      <h1>Reports</h1>

      <Link to="/admin/reports/attendance">
        <button>Attendance Report</button>
      </Link>

      <Link to="/admin/reports/teachers">
        <button>Teacher Report</button>
      </Link>

      <Link to="/admin/reports/students">
        <button>Student Report</button>
      </Link>

      <Link to="/admin/reports/timetable">
        <button>Timetable Report</button>
      </Link>
    </div>
  );
}

export default Reports;