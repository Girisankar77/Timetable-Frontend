import { Link } from "react-router-dom";

function Classes() {
  return (
    <div>
      <h1>Classes Management</h1>

      <Link to="/admin/classes/add">
        <button>Add Class</button>
      </Link>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Class Name</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>A</td>
            <td>
              <Link to="/admin/classes/edit/1">
                <button>Edit</button>
              </Link>

              <Link to="/admin/classes/delete/1">
                <button>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Classes;