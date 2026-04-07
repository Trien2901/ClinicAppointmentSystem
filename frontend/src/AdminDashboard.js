import { useEffect, useState } from "react";

function AdminDashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => setCount(data.length))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">📊 Dashboard</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>Total Appointments</h5>
            <h2 className="text-primary">{count}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;