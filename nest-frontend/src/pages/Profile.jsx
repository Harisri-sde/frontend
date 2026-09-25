import DashboardLayout from "../components/DashboardLayout";
import StatusBadge from "../components/StatusBadge";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>
          <p className="page-eyebrow">
            My Account
          </p>

          <h1>
            My Profile
          </h1>

          <p>
            View your personal and employment information.
          </p>
        </div>

      </div>


      <div className="profile-layout">

        <div className="profile-card">

          <div className="profile-avatar">
            {currentUser?.name?.charAt(0)}
          </div>

          <h2>
            {currentUser?.name}
          </h2>

          <p>
            {currentUser?.designation}
          </p>

          <StatusBadge
            status={currentUser?.status}
          />

        </div>


        <div className="details-card">

          <h3>
            Employee Information
          </h3>


          <div className="details-grid">

            <div className="detail-item">
              <span>Employee ID</span>
              <strong>
                {currentUser?.employeeId}
              </strong>
            </div>

            <div className="detail-item">
              <span>Email</span>
              <strong>
                {currentUser?.email}
              </strong>
            </div>

            <div className="detail-item">
              <span>Department</span>
              <strong>
                {currentUser?.department}
              </strong>
            </div>

            <div className="detail-item">
              <span>Designation</span>
              <strong>
                {currentUser?.designation}
              </strong>
            </div>

            <div className="detail-item">
              <span>Phone</span>
              <strong>
                {currentUser?.phone}
              </strong>
            </div>

            <div className="detail-item">
              <span>Joining Date</span>
              <strong>
                {currentUser?.joiningDate}
              </strong>
            </div>

            <div className="detail-item">
              <span>Role</span>
              <strong>
                {currentUser?.role}
              </strong>
            </div>

            <div className="detail-item">
              <span>Status</span>
              <strong>
                {currentUser?.status}
              </strong>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}