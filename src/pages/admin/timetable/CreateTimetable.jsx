function CreateTimetable() {
  return (
    <div>
      <h1>Create Timetable</h1>

      <form>
        <input
          type="text"
          placeholder="Class"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Subject"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Teacher"
        />

        <br /><br />

        <button type="submit">
          Save Timetable
        </button>
      </form>
    </div>
  );
}

export default CreateTimetable;