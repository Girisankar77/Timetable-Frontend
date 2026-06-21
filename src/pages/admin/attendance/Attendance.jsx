import { Link } from "react-router-dom";

function Attendance() {
  return (
    <div>
      <h1>Attendance Management</h1>

      <button>Mark Attendance</button>

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>CSE A</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Rahul</td>
            <td>CSE A</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>

      <br />

      <Link to="/admin/attendance/report">
        <button>View Reports</button>
      </Link>
    </div>
  );
}

export default Attendance;