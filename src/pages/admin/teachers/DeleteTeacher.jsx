import { useNavigate, useParams } from "react-router-dom";

function DeleteTeacher() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    alert(`Teacher ${id} deleted successfully`);
    
    // Later this will call your backend API

    navigate("/admin/teachers");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delete Teacher</h1>

      <p>
        Are you sure you want to delete this teacher?
      </p>

      <button onClick={handleDelete}>
        Yes, Delete
      </button>

      <button
        onClick={() => navigate("/admin/teachers")}
        style={{ marginLeft: "10px" }}
      >
        Cancel
      </button>
    </div>
  );
}

export default DeleteTeacher;