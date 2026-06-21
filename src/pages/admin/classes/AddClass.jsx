function AddClass() {
  return (
    <div>
      <h1>Add Class</h1>

      <form>
        <input
          type="text"
          placeholder="Class Name"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Section"
        />

        <br /><br />

        <button type="submit">
          Add Class
        </button>
      </form>
    </div>
  );
}

export default AddClass;