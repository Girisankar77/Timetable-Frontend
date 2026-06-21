function AddTeacher() {
  return (
    <div>
      <h1>Add Teacher</h1>

      <form>
        <input type="text" placeholder="Teacher Name" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <input type="text" placeholder="Subject" />
        <br /><br />

        <input type="text" placeholder="Phone Number" />
        <br /><br />

        <button type="submit">Save Teacher</button>
      </form>
    </div>
  );
}

export default AddTeacher;