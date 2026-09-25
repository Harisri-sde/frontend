import DashboardLayout from "../../components/DashboardLayout";
import AttendanceCard from "../../components/AttendanceCard";

import {
  users,
  attendanceRecords,
} from "../../data/mockData";

import { useAuth } from "../../context/AuthContext";

export default function ManagerDashboard() {
  const { currentUser } = useAuth();

  const teamMembers = users.filter(
    (user) =>
      user.managerId === currentUser?.id
  );

  const presentToday = teamMembers.filter(
    (member) =>
      attendanceRecords.some(
        (record) =>
          record.employeeId === member.id &&
          record.date === "2026-09-25" &&
          record.checkIn
      )
  );

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            Manager Portal
          </p>

          <h1>
            Manager Dashboard
          </h1>

          <p>
            Monitor your team and manage your attendance.
          </p>

        </div>

      </div>


      <div className="stats-grid">

        <div className="stat-card">
          <span>Team Members</span>
          <strong>
            {teamMembers.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Present Today</span>
          <strong>
            {presentToday.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Department</span>
          <strong>
            {currentUser?.department}
          </strong>
        </div>

      </div>


      <div className="dashboard-grid">

        <AttendanceCard />

        <div className="info-card">

          <h3>
            My Team
          </h3>

          {teamMembers.map((member) => (

            <div
              className="team-member-row"
              key={member.id}
            >

              <div className="user-avatar">
                {member.name.charAt(0)}
              </div>

              <div>
                <strong>
                  {member.name}
                </strong>

                <span>
                  {member.designation}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}