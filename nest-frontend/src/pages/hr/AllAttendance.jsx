import DashboardLayout from "../../components/DashboardLayout";
import StatusBadge from "../../components/StatusBadge";

import {
  users,
  attendanceRecords,
} from "../../data/mockData";

export default function AllAttendance() {
  const today = "2026-09-25";

  const getEmployeeAttendance = (
    employeeId
  ) => {
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
            HR / Admin
          </p>

          <h1>
            All Attendance
          </h1>

          <p>
            Company-wide attendance for today.
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

              {users.map((employee) => {

                const attendance =
                  getEmployeeAttendance(
                    employee.id
                  );

                return (

                  <tr key={employee.id}>

                    <td>
                      <strong>
                        {employee.name}
                      </strong>
                    </td>

                    <td>
                      {employee.employeeId}
                    </td>

                    <td>
                      {employee.department}
                    </td>

                    <td>
                      {attendance?.checkIn ||
                        "--"}
                    </td>

                    <td>
                      {attendance?.checkOut ||
                        "--"}
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