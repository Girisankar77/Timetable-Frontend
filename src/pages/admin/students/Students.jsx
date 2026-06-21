import { Link } from "react-router-dom";

function Students() {
  const students = [
    { id: 1, name: "Rahul", className: "CSE A" },
    { id: 2, name: "Priya", className: "CSE B" },
  ];

  return (
    <div>
      <h1>Students Management</h1>

      <Link to="/admin/students/add">
        <button>Add Student</button>
      </Link>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.className}</td>

              <td>
                <Link to={`/admin/students/edit/${student.id}`}>
                  <button>Edit</button>
                </Link>

                <Link to={`/admin/students/delete/${student.id}`}>
                  <button>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;