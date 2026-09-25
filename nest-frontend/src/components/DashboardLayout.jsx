import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = {
  worker: [
    {
      label: "Dashboard",
      path: "/worker",
    },
    {
      label: "My Profile",
      path: "/profile",
    },
    {
      label: "Attendance",
      path: "/worker/attendance",
    },
    {
      label: "Company Updates",
      path: "/worker/updates",
    },
  ],

  manager: [
    {
      label: "Dashboard",
      path: "/manager",
    },
    {
      label: "My Profile",
      path: "/profile",
    },
    {
      label: "My Attendance",
      path: "/manager/attendance",
    },
    {
      label: "Team Attendance",
      path: "/manager/team-attendance",
    },
    {
      label: "Company Updates",
      path: "/manager/updates",
    },
  ],

  hr_admin: [
    {
      label: "Dashboard",
      path: "/hr",
    },
    {
      label: "My Profile",
      path: "/profile",
    },
    {
      label: "My Attendance",
      path: "/hr/attendance",
    },
    {
      label: "Employees",
      path: "/hr/employees",
    },
    {
      label: "All Attendance",
      path: "/hr/all-attendance",
    },
    {
      label: "Company Updates",
      path: "/hr/updates",
    },
  ],
};

function getRoleLabel(role) {
  switch (role) {
    case "worker":
      return "Worker";

    case "manager":
      return "Manager";

    case "hr_admin":
      return "HR / Admin";

    default:
      return "Employee";
  }
}

export default function DashboardLayout({ children }) {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const navItems =
    navigation[currentUser?.role] || [];

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-box">
            E
          </div>

          <span>EmployeeHub</span>
        </div>

        <div className="sidebar-user">

          <div className="user-avatar">
            {currentUser?.name?.charAt(0)}
          </div>

          <div className="sidebar-user-info">
            <strong>
              {currentUser?.name}
            </strong>

            <span>
              {getRoleLabel(currentUser?.role)}
            </span>
          </div>

        </div>

        <nav className="sidebar-nav">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </aside>


      {/* Main */}
      <div className="main-area">

        <header className="topbar">

          <div>
            <p className="topbar-label">
              Employee Management Portal
            </p>

            <h2>
              Welcome,{" "}
              {currentUser?.name?.split(" ")[0]}
            </h2>
          </div>

          <div className="topbar-user">

            <div className="user-avatar">
              {currentUser?.name?.charAt(0)}
            </div>

            <div>
              <strong>
                {currentUser?.name}
              </strong>

              <span>
                {currentUser?.department}
              </span>
            </div>

          </div>

        </header>

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}