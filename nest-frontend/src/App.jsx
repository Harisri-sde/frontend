import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

// Worker
import WorkerDashboard from "./pages/worker/WorkerDashboard";
import WorkerAttendance from "./pages/worker/WorkerAttendance";
import WorkerUpdates from "./pages/worker/WorkerUpdates";

// Manager
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerAttendance from "./pages/manager/ManagerAttendance";
import TeamAttendance from "./pages/manager/TeamAttendance";
import ManagerUpdates from "./pages/manager/ManagerUpdates";

// HR
import HRDashboard from "./pages/hr/HRDashboard";
import HRAttendance from "./pages/hr/HRAttendance";
import EmployeeManagement from "./pages/hr/EmployeeManagement";
import AllAttendance from "./pages/hr/AllAttendance";
import HRUpdates from "./pages/hr/HRUpdates";

function Unauthorized() {
  return (
    <div className="center-page">
      <h1>
        Access Denied
      </h1>

      <p>
        You don't have permission to access this page.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* =========================================
              PUBLIC
          ========================================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />


          {/* =========================================
              SHARED AUTHENTICATED ROUTES
          ========================================= */}

          <Route
            element={
              <ProtectedRoute
                allowedRoles={[
                  "worker",
                  "manager",
                  "hr_admin",
                ]}
              />
            }
          >

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>


          {/* =========================================
              WORKER
          ========================================= */}

          <Route
            element={
              <ProtectedRoute
                allowedRoles={["worker"]}
              />
            }
          >

            <Route
              path="/worker"
              element={<WorkerDashboard />}
            />

            <Route
              path="/worker/attendance"
              element={<WorkerAttendance />}
            />

            <Route
              path="/worker/updates"
              element={<WorkerUpdates />}
            />

          </Route>


          {/* =========================================
              MANAGER
          ========================================= */}

          <Route
            element={
              <ProtectedRoute
                allowedRoles={["manager"]}
              />
            }
          >

            <Route
              path="/manager"
              element={<ManagerDashboard />}
            />

            <Route
              path="/manager/attendance"
              element={<ManagerAttendance />}
            />

            <Route
              path="/manager/team-attendance"
              element={<TeamAttendance />}
            />

            <Route
              path="/manager/updates"
              element={<ManagerUpdates />}
            />

          </Route>


          {/* =========================================
              HR / ADMIN
          ========================================= */}

          <Route
            element={
              <ProtectedRoute
                allowedRoles={["hr_admin"]}
              />
            }
          >

            <Route
              path="/hr"
              element={<HRDashboard />}
            />

            <Route
              path="/hr/attendance"
              element={<HRAttendance />}
            />

            <Route
              path="/hr/employees"
              element={
                <EmployeeManagement />
              }
            />

            <Route
              path="/hr/all-attendance"
              element={<AllAttendance />}
            />

            <Route
              path="/hr/updates"
              element={<HRUpdates />}
            />

          </Route>


          {/* =========================================
              DEFAULT
          ========================================= */}

          <Route
            path="/"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}