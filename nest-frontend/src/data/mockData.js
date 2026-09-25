// ======================================================
// USERS
// ======================================================

export const users = [
  {
    id: 1,
    employeeId: "EMP001",
    name: "Arun Kumar",
    email: "worker@company.com",
    password: "password123",
    role: "worker",
    department: "Operations",
    designation: "Field Worker",
    phone: "+971 50 111 1111",
    joiningDate: "2024-03-10",
    managerId: 2,
    status: "Active",
  },

  {
    id: 2,
    employeeId: "EMP002",
    name: "Rahul Sharma",
    email: "manager@company.com",
    password: "password123",
    role: "manager",
    department: "Operations",
    designation: "Operations Manager",
    phone: "+971 50 222 2222",
    joiningDate: "2022-08-15",
    managerId: null,
    status: "Active",
  },

  {
    id: 3,
    employeeId: "EMP003",
    name: "Priya Nair",
    email: "admin@company.com",
    password: "password123",
    role: "hr_admin",
    department: "Human Resources",
    designation: "HR Administrator",
    phone: "+971 50 333 3333",
    joiningDate: "2021-05-20",
    managerId: null,
    status: "Active",
  },

  {
    id: 4,
    employeeId: "EMP004",
    name: "Mohammed Ali",
    email: "mohammed@company.com",
    password: "password123",
    role: "worker",
    department: "Operations",
    designation: "Technician",
    phone: "+971 50 444 4444",
    joiningDate: "2023-11-12",
    managerId: 2,
    status: "Active",
  },

  {
    id: 5,
    employeeId: "EMP005",
    name: "Sara Thomas",
    email: "sara@company.com",
    password: "password123",
    role: "worker",
    department: "Operations",
    designation: "Site Worker",
    phone: "+971 50 555 5555",
    joiningDate: "2024-01-08",
    managerId: 2,
    status: "Active",
  },
];


// ======================================================
// ATTENDANCE
// ======================================================

export const attendanceRecords = [
  {
    id: 1,
    employeeId: 1,
    date: "2026-09-25",
    checkIn: "08:45",
    checkOut: null,
    status: "Present",
  },

  {
    id: 2,
    employeeId: 1,
    date: "2026-09-24",
    checkIn: "08:50",
    checkOut: "17:35",
    status: "Present",
  },

  {
    id: 3,
    employeeId: 1,
    date: "2026-09-23",
    checkIn: "08:40",
    checkOut: "17:30",
    status: "Present",
  },

  {
    id: 4,
    employeeId: 2,
    date: "2026-09-25",
    checkIn: "08:30",
    checkOut: null,
    status: "Present",
  },

  {
    id: 5,
    employeeId: 2,
    date: "2026-09-24",
    checkIn: "08:25",
    checkOut: "17:45",
    status: "Present",
  },

  {
    id: 6,
    employeeId: 4,
    date: "2026-09-25",
    checkIn: "09:05",
    checkOut: null,
    status: "Present",
  },

  {
    id: 7,
    employeeId: 5,
    date: "2026-09-25",
    checkIn: null,
    checkOut: null,
    status: "Absent",
  },
];


// ======================================================
// COMPANY UPDATES
// ======================================================

export const announcements = [
  {
    id: 1,
    title: "Monthly Team Meeting",
    description:
      "The monthly company meeting will be held on the last working day of this month.",
    category: "General",
    date: "2026-09-25",
    author: "HR Department",
  },

  {
    id: 2,
    title: "Updated Attendance Policy",
    description:
      "Please review the updated attendance and working-hours guidelines.",
    category: "HR",
    date: "2026-09-22",
    author: "HR Department",
  },

  {
    id: 3,
    title: "Safety Awareness Session",
    description:
      "All employees are invited to attend the upcoming workplace safety awareness session.",
    category: "Training",
    date: "2026-09-20",
    author: "Operations",
  },
];