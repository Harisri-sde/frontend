src/
├── data/
│   └── mockData.js          # hardcoded users, attendance, announcements — swap for API calls later
├── context/
│   └── AuthContext.jsx      # login/logout, current user, persisted to localStorage
├── components/
│   ├── ProtectedRoute.jsx   # role-based route guard
│   ├── DashboardLayout.jsx  # sidebar + topbar shell, nav items differ per role
│   ├── AttendanceCard.jsx   # check-in / check-out widget (reused by every role)
│   ├── StatusBadge.jsx      # colored status pill
│   └── UpdatesFeed.jsx      # announcements list (+ post form when canPost)
├── pages/
│   ├── Login.jsx
│   ├── Profile.jsx          # shared "my profile" page, reused by all 3 roles
│   ├── worker/
│   │   ├── WorkerDashboard.jsx
│   │   ├── WorkerAttendance.jsx
│   │   └── WorkerUpdates.jsx
│   ├── manager/
│   │   ├── ManagerDashboard.jsx
│   │   ├── ManagerAttendance.jsx
│   │   ├── TeamAttendance.jsx     # manager-only: team's check-in/out status
│   │   └── ManagerUpdates.jsx
│   └── hr/
│       ├── HRDashboard.jsx
│       ├── HRAttendance.jsx
│       ├── EmployeeManagement.jsx # HR/Admin-only: view + add employees
│       ├── AllAttendance.jsx      # HR/Admin-only: company-wide attendance
│       └── HRUpdates.jsx          # HR/Admin-only: can post updates (canPost=true)
└── App.jsx                  # router + role-protected route trees