import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import StudentDashboard from "./pages/login/StudentDashboard";
import TeacherDashboard from "./pages/login/TeacherDashboard";
import Dashboard from "./pages/admin/Dashboard";

import Teachers from "./pages/admin/teachers/Teachers";
import AddTeacher from "./pages/admin/teachers/AddTeacher";
import EditTeacher from "./pages/admin/teachers/EditTeacher";
import DeleteTeacher from "./pages/admin/teachers/DeleteTeacher";

import Students from "./pages/admin/students/Students";
import AddStudent from "./pages/admin/students/AddStudent";
import EditStudent from "./pages/admin/students/EditStudent";
import DeleteStudent from "./pages/admin/students/DeleteStudent";

import Classes from "./pages/admin/classes/Classes";
import AddClass from "./pages/admin/classes/AddClass";
import EditClass from "./pages/admin/classes/EditClass";
import DeleteClass from "./pages/admin/classes/DeleteClass";

import Subjects from "./pages/admin/subjects/Subjects";
import AddSubject from "./pages/admin/subjects/AddSubject";
import EditSubject from "./pages/admin/subjects/EditSubject";
import DeleteSubject from "./pages/admin/subjects/DeleteSubject";

import Timetable from "./pages/admin/timetable/Timetable";
import CreateTimetable from "./pages/admin/timetable/CreateTimetable";
import EditTimetable from "./pages/admin/timetable/EditTimetable";
import AutoGenerator from "./pages/admin/timetable/AutoGenerator";

import Attendance from "./pages/admin/attendance/Attendance";
import Report from "./pages/admin/attendance/Report";

import LeaveRequests from "./pages/admin/leave-management/LeaveRequests";
import ApproveLeave from "./pages/admin/leave-management/ApproveLeave";
import RejectLeave from "./pages/admin/leave-management/RejectLeave";

import Notifications from "./pages/admin/notifications/Notifications";
import CreateNotification from "./pages/admin/notifications/CreateNotification";

import Reports from "./pages/admin/reports/Reports";
import AttendanceReport from "./pages/admin/reports/AttendanceReport";
import TeacherReport from "./pages/admin/reports/TeacherReport";
import StudentReport from "./pages/admin/reports/StudentReport";
import TimetableReport from "./pages/admin/reports/TimetableReport";

import Settings from "./pages/admin/settings/Settings";
import SchoolSettings from "./pages/admin/settings/SchoolSettings";
import Profile from "./pages/admin/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<Dashboard />} />

        <Route
        path="/admin/teachers"
        element={<Teachers />}
        />

        <Route
        path="/admin/teachers/add"
        element={<AddTeacher />}
        />

        <Route
        path="/admin/teachers/edit/:id"
        element={<EditTeacher />}
        />

        <Route
        path="/admin/teachers/delete/:id"
        element={<DeleteTeacher />}
        />

        <Route
        path="/admin/students"
        element={<Students />}
        />

        <Route
        path="/admin/students/add"
        element={<AddStudent />}
        />

        <Route
        path="/admin/students/edit/:id"
        element={<EditStudent />}
        />

        <Route
        path="/admin/students/delete/:id"
        element={<DeleteStudent />}
        />

        <Route
        path="/admin/classes"
        element={<Classes />}
        />

        <Route
        path="/admin/classes/add"
        element={<AddClass />}
        />

        <Route
        path="/admin/classes/edit/:id"
        element={<EditClass />}
        />

        <Route
        path="/admin/classes/delete/:id"
        element={<DeleteClass />}
        />

        <Route
        path="/admin/subjects"
        element={<Subjects />}
        />

        <Route
        path="/admin/subjects/add"
        element={<AddSubject />}
        />

        <Route
        path="/admin/subjects/edit/:id"
        element={<EditSubject />}
        />

        <Route
        path="/admin/subjects/delete/:id"
        element={<DeleteSubject />}
        />

        <Route
        path="/admin/timetable"
        element={<Timetable />}
        />

        <Route
        path="/admin/timetable/create"
        element={<CreateTimetable />}
        />

        <Route
        path="/admin/timetable/edit/:id"
        element={<EditTimetable />}
        />

        <Route
        path="/admin/timetable/auto"
        element={<AutoGenerator />}
        />

        <Route
        path="/admin/attendance"
        element={<Attendance />}
        />

        <Route
        path="/admin/attendance/report"
        element={<Report />}
        />

        <Route
        path="/admin/leave-management"
        element={<LeaveRequests />}
        />

        <Route
        path="/admin/leave-management/approve/:id"
        element={<ApproveLeave />}
        />

        <Route
        path="/admin/leave-management/reject/:id"
        element={<RejectLeave />}
        />

        <Route
        path="/admin/notifications"
        element={<Notifications />}
        />

        <Route
        path="/admin/notifications/create"
        element={<CreateNotification />}
        />

        <Route 
        path="/admin/reports" 
        element={<Reports />} 
        />

        <Route
        path="/admin/reports/attendance"
        element={<AttendanceReport />}
        />

        <Route
        path="/admin/reports/teachers"
        element={<TeacherReport />}
        />

        <Route
        path="/admin/reports/students"
        element={<StudentReport />}
        />

        <Route
        path="/admin/reports/timetable"
        element={<TimetableReport />}
        />

        <Route
        path="/admin/settings"
        element={<Settings />}
        />

        <Route
        path="/admin/settings/school"
        element={<SchoolSettings />}
        />

        <Route
        path="/admin/profile"
        element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;