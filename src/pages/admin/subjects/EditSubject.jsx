function EditSubject() {
  return (
    <div>
      <h1>Edit Subject</h1>

      <form>
        <input
          type="text"
          defaultValue="Mathematics"
        />

        <br /><br />

        <input
          type="text"
          defaultValue="MATH101"
        />

        <br /><br />

        <button type="submit">
          Update Subject
        </button>
      </form>
    </div>
  );
}

export default EditSubject;