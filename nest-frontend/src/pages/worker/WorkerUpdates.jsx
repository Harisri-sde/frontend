import DashboardLayout from "../../components/DashboardLayout";
import UpdatesFeed from "../../components/UpdatesFeed";

export default function WorkerUpdates() {
  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            Company
          </p>

          <h1>
            Company Updates
          </h1>

          <p>
            Stay informed about the latest company announcements.
          </p>

        </div>

      </div>


      <UpdatesFeed canPost={false} />

    </DashboardLayout>
  );
}