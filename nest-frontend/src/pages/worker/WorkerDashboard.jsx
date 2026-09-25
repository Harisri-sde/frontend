import DashboardLayout from "../../components/DashboardLayout";
import AttendanceCard from "../../components/AttendanceCard";
import { useAuth } from "../../context/AuthContext";

export default function WorkerDashboard() {
  const { currentUser } = useAuth();

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            Worker Portal
          </p>

          <h1>
            My Dashboard
          </h1>

          <p>
            Manage your attendance and stay updated.
          </p>

        </div>

      </div>


      <div className="stats-grid">

        <div className="stat-card">
          <span>Employee ID</span>
          <strong>
            {currentUser?.employeeId}
          </strong>
        </div>

        <div className="stat-card">
          <span>Department</span>
          <strong>
            {currentUser?.department}
          </strong>
        </div>

        <div className="stat-card">
          <span>Designation</span>
          <strong>
            {currentUser?.designation}
          </strong>
        </div>

      </div>


      <div className="dashboard-grid">

        <AttendanceCard />

        <div className="info-card">

          <h3>
            My Information
          </h3>

          <div className="info-row">
            <span>Name</span>
            <strong>
              {currentUser?.name}
            </strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>
              {currentUser?.email}
            </strong>
          </div>

          <div className="info-row">
            <span>Department</span>
            <strong>
              {currentUser?.department}
            </strong>
          </div>

          <div className="info-row">
            <span>Role</span>
            <strong>
              Worker
            </strong>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}