import { Link } from "react-router-dom";

function Notifications() {
  return (
    <div>
      <h1>Notifications</h1>

      <Link to="/admin/notifications/create">
        <button>Create Notification</button>
      </Link>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Audience</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Exam Schedule</td>
            <td>Students</td>
            <td>21-06-2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Staff Meeting</td>
            <td>Teachers</td>
            <td>22-06-2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Notifications;