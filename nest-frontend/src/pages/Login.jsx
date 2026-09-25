import { useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function getDashboardPath(role) {
  switch (role) {
    case "worker":
      return "/worker";

    case "manager":
      return "/manager";

    case "hr_admin":
      return "/hr";

    default:
      return "/login";
  }
}

export default function Login() {
  const {
    login,
    currentUser,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  if (isAuthenticated && currentUser) {
    return (
      <Navigate
        to={getDashboardPath(currentUser.role)}
        replace
      />
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError(
        "Please enter your email and password."
      );

      return;
    }

    const result = login(
      email.trim(),
      password
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    const dashboardPath =
      getDashboardPath(result.user.role);

    const requestedPath =
      location.state?.from?.pathname;

    navigate(
      requestedPath || dashboardPath,
      {
        replace: true,
      }
    );
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-brand">

          <div className="login-logo">
            E
          </div>

          <h1>
            EmployeeHub
          </h1>

          <p>
            Internal Employee Management
          </p>

        </div>


        <div className="login-heading">

          <h2>
            Welcome back
          </h2>

          <p>
            Sign in to access your employee portal.
          </p>

        </div>


        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email"
            />

          </div>


          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
            />

          </div>


          {error && (
            <div className="form-error">
              {error}
            </div>
          )}


          <button
            type="submit"
            className="primary-button login-button"
          >
            Sign In
          </button>

        </form>


        <div className="demo-accounts">

          <h3>
            Demo Accounts
          </h3>

          <p>
            <strong>Worker:</strong>{" "}
            worker@company.com
          </p>

          <p>
            <strong>Manager:</strong>{" "}
            manager@company.com
          </p>

          <p>
            <strong>HR/Admin:</strong>{" "}
            admin@company.com
          </p>

          <p>
            <strong>Password:</strong>{" "}
            password123
          </p>

        </div>

      </div>

    </div>
  );
}