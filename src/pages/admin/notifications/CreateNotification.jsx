function CreateNotification() {
  return (
    <div>
      <h1>Create Notification</h1>

      <form>
        <div>
          <label>Title</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Audience</label>
          <br />
          <select>
            <option>Students</option>
            <option>Teachers</option>
            <option>All</option>
          </select>
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea rows="5"></textarea>
        </div>

        <br />

        <button type="submit">
          Send Notification
        </button>
      </form>
    </div>
  );
}

export default CreateNotification;