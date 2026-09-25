import DashboardLayout from "../../components/DashboardLayout";
import StatusBadge from "../../components/StatusBadge";

import {
  users,
  attendanceRecords,
} from "../../data/mockData";

import { useAuth } from "../../context/AuthContext";

export default function TeamAttendance() {
  const { currentUser } = useAuth();

  const teamMembers = users.filter(
    (user) =>
      user.managerId === currentUser?.id
  );

  const today = "2026-09-25";

  const getAttendance = (employeeId) => {
    return attendanceRecords.find(
      (record) =>
        record.employeeId === employeeId &&
        record.date === today
    );
  };

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            Team Management
          </p>

          <h1>
            Team Attendance
          </h1>

          <p>
            Monitor your team's attendance for today.
          </p>

        </div>

      </div>


      <div className="table-card">

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Employee</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {teamMembers.map((member) => {

                const attendance =
                  getAttendance(member.id);

                return (
                  <tr key={member.id}>

                    <td>
                      <strong>
                        {member.name}
                      </strong>
                    </td>

                    <td>
                      {member.employeeId}
                    </td>

                    <td>
                      {member.department}
                    </td>

                    <td>
                      {attendance?.checkIn || "--"}
                    </td>

                    <td>
                      {attendance?.checkOut || "--"}
                    </td>

                    <td>

                      <StatusBadge
                        status={
                          attendance?.status ||
                          "Absent"
                        }
                      />

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}