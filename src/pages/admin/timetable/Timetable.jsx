import { Link } from "react-router-dom";

function Timetable() {
  return (
    <div>
      <h1>Timetable Management</h1>

      <Link to="/admin/timetable/create">
        <button>Create Timetable</button>
      </Link>

      <Link to="/admin/timetable/auto">
        <button>Auto Generate</button>
      </Link>

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1<br />9:00 - 10:00</th>
            <th>Period 2<br />10:00 - 11:00</th>
            <th>Period 3<br />11:00 - 12:00</th>
            <th>Lunch Break<br />12:00 - 1:00</th>
            <th>Period 4<br />1:00 - 2:00</th>
            <th>Period 5<br />2:00 - 3:00</th>
            <th>Period 6<br />3:00 - 4:00</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>Mathematics</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>Lunch</td>
            <td>DBMS</td>
            <td>Java</td>
            <td>English</td>
          </tr>

          <tr>
            <td>Tuesday</td>
            <td>Java</td>
            <td>DBMS</td>
            <td>Mathematics</td>
            <td>Lunch</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>English</td>
          </tr>

          <tr>
            <td>Wednesday</td>
            <td>English</td>
            <td>Mathematics</td>
            <td>Java</td>
            <td>Lunch</td>
            <td>DBMS</td>
            <td>Physics</td>
            <td>Chemistry</td>
          </tr>

          <tr>
            <td>Thursday</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>English</td>
            <td>Lunch</td>
            <td>Mathematics</td>
            <td>Java</td>
            <td>DBMS</td>
          </tr>

          <tr>
            <td>Friday</td>
            <td>DBMS</td>
            <td>Java</td>
            <td>Physics</td>
            <td>Lunch</td>
            <td>Chemistry</td>
            <td>English</td>
            <td>Mathematics</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Timetable;