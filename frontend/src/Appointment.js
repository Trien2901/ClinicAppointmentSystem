import { useEffect, useState } from "react";

function Appointment() {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:5089/api/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleBook = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:5089/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user.id,
        doctorId: parseInt(doctorId),
        appointmentDate: date
      })
    }).then(() => alert("Đặt lịch thành công"));
  };

  return (
    <div className="card p-3 shadow">
      <h3>Đặt lịch khám</h3>

      <select
        className="form-control my-2"
        onChange={e => setDoctorId(e.target.value)}
      >
        <option value="">-- Chọn bác sĩ --</option>
        {doctors.map(d => (
          <option key={d.id} value={d.id}>
            {d.name} - {d.specialty}
          </option>
        ))}
      </select>

      <input
        type="datetime-local"
        className="form-control my-2"
        onChange={e => setDate(e.target.value)}
      />

      <button className="btn btn-success w-100" onClick={handleBook}>
        Đặt lịch
      </button>
    </div>
  );
}

export default Appointment;