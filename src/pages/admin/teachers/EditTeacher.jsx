function EditTeacher() {
  return (
    <div>
      <h1>Edit Teacher</h1>

      <form>
        <input
          type="text"
          defaultValue="John Smith"
        />
        <br /><br />

        <input
          type="email"
          defaultValue="john@gmail.com"
        />
        <br /><br />

        <input
          type="text"
          defaultValue="Mathematics"
        />
        <br /><br />

        <input
          type="text"
          defaultValue="9876543210"
        />
        <br /><br />

        <button type="submit">
          Update Teacher
        </button>
      </form>
    </div>
  );
}

export default EditTeacher;