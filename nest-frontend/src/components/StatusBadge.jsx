const statusClassMap = {
  Present: "status-present",
  Absent: "status-absent",
  Late: "status-late",
  Active: "status-active",
  Inactive: "status-inactive",
  Pending: "status-pending",
};

export default function StatusBadge({ status }) {
  const className =
    statusClassMap[status] || "status-default";

  return (
    <span className={`status-badge ${className}`}>
      {status}
    </span>
  );
}