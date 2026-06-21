import { Link } from "react-router-dom";

function Subjects() {
  return (
    <div>
      <h1>Subjects Management</h1>

      <Link to="/admin/subjects/add">
        <button>Add Subject</button>
      </Link>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject Name</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Mathematics</td>
            <td>MATH101</td>
            <td>
              <Link to="/admin/subjects/edit/1">
                <button>Edit</button>
              </Link>

              <Link to="/admin/subjects/delete/1">
                <button>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Subjects;    