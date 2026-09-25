import DashboardLayout from "../../components/DashboardLayout";
import AttendanceCard from "../../components/AttendanceCard";
import StatusBadge from "../../components/StatusBadge";

import { attendanceRecords } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

export default function HRAttendance() {
  const { currentUser } = useAuth();

  const records = attendanceRecords.filter(
    (record) =>
      record.employeeId === currentUser?.id
  );

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            Attendance
          </p>

          <h1>
            My Attendance
          </h1>

          <p>
            View your personal attendance.
          </p>

        </div>

      </div>


      <AttendanceCard />


      <div className="table-card">

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {records.map((record) => (

                <tr key={record.id}>

                  <td>
                    {record.date}
                  </td>

                  <td>
                    {record.checkIn || "--"}
                  </td>

                  <td>
                    {record.checkOut || "--"}
                  </td>

                  <td>
                    <StatusBadge
                      status={record.status}
                    />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}