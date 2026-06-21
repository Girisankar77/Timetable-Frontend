function Report() {
  return (
    <div>
      <h1>Attendance Reports</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            <th>Total Classes</th>
            <th>Present</th>
            <th>Attendance %</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>100</td>
            <td>95</td>
            <td>95%</td>
          </tr>

          <tr>
            <td>Rahul</td>
            <td>100</td>
            <td>88</td>
            <td>88%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Report;