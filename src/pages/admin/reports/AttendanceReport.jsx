function AttendanceReport() {
  return (
    <div>
      <h1>Attendance Report</h1>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Class</th>
            <th>Total Students</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>CSE A</td>
            <td>60</td>
            <td>55</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceReport;