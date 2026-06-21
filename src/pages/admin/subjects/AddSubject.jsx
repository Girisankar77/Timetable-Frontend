function AddSubject() {
  return (
    <div>
      <h1>Add Subject</h1>

      <form>
        <input
          type="text"
          placeholder="Subject Name"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Subject Code"
        />

        <br /><br />

        <button type="submit">
          Add Subject
        </button>
      </form>
    </div>
  );
}

export default AddSubject;
