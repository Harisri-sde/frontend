import DashboardLayout from "../../components/DashboardLayout";
import AttendanceCard from "../../components/AttendanceCard";

import {
  users,
  attendanceRecords,
} from "../../data/mockData";

export default function HRDashboard() {
  const activeEmployees = users.filter(
    (user) => user.status === "Active"
  );

  const workers = users.filter(
    (user) => user.role === "worker"
  );

  const managers = users.filter(
    (user) => user.role === "manager"
  );

  const presentToday = attendanceRecords.filter(
    (record) =>
      record.date === "2026-09-25" &&
      record.checkIn
  );

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            HR / Admin Portal
          </p>

          <h1>
            HR Dashboard
          </h1>

          <p>
            Manage employees and monitor company attendance.
          </p>

        </div>

      </div>


      <div className="stats-grid">

        <div className="stat-card">
          <span>Active Employees</span>
          <strong>
            {activeEmployees.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Present Today</span>
          <strong>
            {presentToday.length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Workers / Managers</span>
          <strong>
            {workers.length} / {managers.length}
          </strong>
        </div>

      </div>


      <div className="dashboard-grid">

        <AttendanceCard />

        <div className="info-card">

          <h3>
            Employee Overview
          </h3>

          <div className="info-row">
            <span>Total Employees</span>
            <strong>
              {activeEmployees.length}
            </strong>
          </div>

          <div className="info-row">
            <span>Workers</span>
            <strong>
              {workers.length}
            </strong>
          </div>

          <div className="info-row">
            <span>Managers</span>
            <strong>
              {managers.length}
            </strong>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}