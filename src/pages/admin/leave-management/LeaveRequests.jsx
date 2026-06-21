import { Link } from "react-router-dom";

function LeaveRequests() {
  return (
    <div>
      <h1>Leave Requests</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Teacher Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Mr. Sharma</td>
            <td>01-07-2026</td>
            <td>03-07-2026</td>
            <td>Medical Leave</td>
            <td>
              <Link to="/admin/leave-management/approve/1">
                <button>Approve</button>
              </Link>

              <Link to="/admin/leave-management/reject/1">
                <button>Reject</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequests;