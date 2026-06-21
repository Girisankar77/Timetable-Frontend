function EditClass() {
  return (
    <div>
      <h1>Edit Class</h1>

      <form>
        <input
          type="text"
          defaultValue="CSE"
        />

        <br /><br />

        <input
          type="text"
          defaultValue="A"
        />

        <br /><br />

        <button type="submit">
          Update Class
        </button>
      </form>
    </div>
  );
}

export default EditClass;