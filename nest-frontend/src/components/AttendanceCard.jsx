import { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function AttendanceCard() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCheckIn = () => {
    if (checkIn) {
      return;
    }

    setCheckIn(getCurrentTime());
  };

  const handleCheckOut = () => {
    if (!checkIn || checkOut) {
      return;
    }

    setCheckOut(getCurrentTime());
  };

  const getStatus = () => {
    if (checkOut) {
      return "Present";
    }

    if (checkIn) {
      return "Present";
    }

    return "Absent";
  };

  return (
    <div className="attendance-card">

      <div className="card-header">

        <div>
          <p className="card-label">
            Today's Attendance
          </p>

          <h3>
            Daily Attendance
          </h3>
        </div>

        <StatusBadge status={getStatus()} />

      </div>


      <div className="attendance-times">

        <div className="time-box">
          <span>Check In</span>

          <strong>
            {checkIn || "--:--"}
          </strong>
        </div>


        <div className="time-box">
          <span>Check Out</span>

          <strong>
            {checkOut || "--:--"}
          </strong>
        </div>

      </div>


      <div className="attendance-actions">

        <button
          className="primary-button"
          onClick={handleCheckIn}
          disabled={Boolean(checkIn)}
        >
          Check In
        </button>

        <button
          className="secondary-button"
          onClick={handleCheckOut}
          disabled={
            !checkIn || Boolean(checkOut)
          }
        >
          Check Out
        </button>

      </div>

    </div>
  );
}