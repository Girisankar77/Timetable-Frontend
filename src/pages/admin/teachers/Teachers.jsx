import { Link } from "react-router-dom";

function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "John Smith",
      subject: "Mathematics",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      subject: "Physics",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teachers Management</h1>

      <Link to="/admin/teachers/add">
        <button>Add Teacher</button>
      </Link>

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;