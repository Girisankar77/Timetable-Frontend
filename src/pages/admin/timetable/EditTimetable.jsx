function EditTimetable() {
  return (
    <div>
      <h1>Edit Timetable</h1>

      <form>
        <input
          type="text"
          defaultValue="CSE A"
        />

        <br /><br />

        <input
          type="text"
          defaultValue="Mathematics"
        />

        <br /><br />

        <button type="submit">
          Update Timetable
        </button>
      </form>
    </div>
  );
}

export default EditTimetable;