import { useNavigate, useParams } from "react-router-dom";

function DeleteStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    alert(`Student ${id} deleted`);
    navigate("/admin/students");
  };

  return (
    <div>
      <h1>Delete Student</h1>

      <p>
        Are you sure you want to delete this student?
      </p>

      <button onClick={handleDelete}>
        Delete
      </button>

      <button onClick={() => navigate("/admin/students")}>
        Cancel
      </button>
    </div>
  );
}

export default DeleteStudent;