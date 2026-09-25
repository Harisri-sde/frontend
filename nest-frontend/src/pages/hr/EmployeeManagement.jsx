import { useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import StatusBadge from "../../components/StatusBadge";

import { users as initialUsers } from "../../data/mockData";

export default function EmployeeManagement() {
  const [employees, setEmployees] =
    useState(initialUsers);

  const [showForm, setShowForm] =
    useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] =
    useState("");
  const [designation, setDesignation] =
    useState("");

  const handleAddEmployee = (event) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !department.trim() ||
      !designation.trim()
    ) {
      return;
    }

    const newEmployee = {
      id: Date.now(),
      employeeId: `EMP${String(
        employees.length + 1
      ).padStart(3, "0")}`,
      name: name.trim(),
      email: email.trim(),
      password: "password123",
      role: "worker",
      department: department.trim(),
      designation: designation.trim(),
      phone: "-",
      joiningDate: new Date()
        .toISOString()
        .split("T")[0],
      managerId: null,
      status: "Active",
    };

    setEmployees((previous) => [
      ...previous,
      newEmployee,
    ]);

    setName("");
    setEmail("");
    setDepartment("");
    setDesignation("");

    setShowForm(false);
  };

  return (
    <DashboardLayout>

      <div className="page-header">

        <div>

          <p className="page-eyebrow">
            HR / Admin
          </p>

          <h1>
            Employee Management
          </h1>

          <p>
            View and add company employees.
          </p>

        </div>


        <button
          className="primary-button"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          {showForm
            ? "Cancel"
            : "Add Employee"}
        </button>

      </div>


      {showForm && (

        <div className="form-card">

          <h3>
            Add New Employee
          </h3>

          <form
            className="employee-form"
            onSubmit={handleAddEmployee}
          >

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Employee name"
              />

            </div>


            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Employee email"
              />

            </div>


            <div className="form-group">

              <label>
                Department
              </label>

              <input
                value={department}
                onChange={(event) =>
                  setDepartment(
                    event.target.value
                  )
                }
                placeholder="Department"
              />

            </div>


            <div className="form-group">

              <label>
                Designation
              </label>

              <input
                value={designation}
                onChange={(event) =>
                  setDesignation(
                    event.target.value
                  )
                }
                placeholder="Designation"
              />

            </div>


            <button
              type="submit"
              className="primary-button"
            >
              Add Employee
            </button>

          </form>

        </div>

      )}


      <div className="table-card">

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Role</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {employees.map((employee) => (

                <tr key={employee.id}>

                  <td>
                    {employee.employeeId}
                  </td>

                  <td>
                    <strong>
                      {employee.name}
                    </strong>
                  </td>

                  <td>
                    {employee.department}
                  </td>

                  <td>
                    {employee.designation}
                  </td>

                  <td>
                    {employee.role}
                  </td>

                  <td>
                    <StatusBadge
                      status={employee.status}
                    />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}