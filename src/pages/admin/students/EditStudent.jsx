function EditStudent() {
  return (
    <div>
      <h1>Edit Student</h1>

      <form>
        <input
          type="text"
          defaultValue="Rahul"
        />

        <br /><br />

        <input
          type="email"
          defaultValue="rahul@gmail.com"
        />

        <br /><br />

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;