function AddStudent() {
  return (
    <div>
      <h1>Add Student</h1>

      <form>
        <input type="text" placeholder="Student Name" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <select>
          <option>Select Class</option>
          <option>CSE A</option>
          <option>CSE B</option>
          <option>CSE C</option>
        </select>

        <br /><br />

        <button type="submit">
          Save Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;