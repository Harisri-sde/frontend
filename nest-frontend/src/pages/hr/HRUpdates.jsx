import DashboardLayout from "../../components/DashboardLayout";
import UpdatesFeed from "../../components/UpdatesFeed";

export default function HRUpdates() {
  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            HR / Admin
          </p>

          <h1>
            Company Updates
          </h1>

          <p>
            Publish and manage company announcements.
          </p>

        </div>

      </div>


      <UpdatesFeed canPost={true} />

    </DashboardLayout>
  );
}