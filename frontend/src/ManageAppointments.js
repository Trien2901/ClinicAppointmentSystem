import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);

  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: "",
    doctor: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  //  LOAD DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.log(err));
  }, []);

  //  CREATE
  const handleCreate = () => {
    fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAppointment)
    })
      .then(res => res.json())
      .then(data => {
        setAppointments([...appointments, data]);
        setNewAppointment({ name: "", date: "", doctor: "" });
        toast.success("Thêm thành công ✅");
      })
      .catch(err => console.log(err));
  };

  //  DELETE
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setAppointments(appointments.filter(a => a.id !== id));
        toast.success("Xóa thành công 🗑️");
      })
      .catch(err => console.log(err));
  };

  //  UPDATE
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editData)
    })
      .then(() => {
        setAppointments(
          appointments.map(a => (a.id === id ? editData : a))
        );
        setEditingId(null);
        toast.success("Cập nhật thành công ✏️");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>📅 Manage Appointments</h2>

      {/* ➕ FORM THÊM */}
      <div className="card p-3 mb-3">
        <h5>➕ Thêm lịch</h5>

        <input
          placeholder="Name"
          className="form-control mb-2"
          value={newAppointment.name}
          onChange={e =>
            setNewAppointment({ ...newAppointment, name: e.target.value })
          }
        />

        <input
          type="date"
          className="form-control mb-2"
          value={newAppointment.date}
          onChange={e =>
            setNewAppointment({ ...newAppointment, date: e.target.value })
          }
        />

        <input
          placeholder="Doctor"
          className="form-control mb-2"
          value={newAppointment.doctor}
          onChange={e =>
            setNewAppointment({ ...newAppointment, doctor: e.target.value })
          }
        />

        <button className="btn btn-success" onClick={handleCreate}>
          Thêm
        </button>
      </div>

      {/*  TABLE */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>
                {editingId === a.id ? (
                  <input
                    value={editData.name}
                    onChange={e =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  a.name
                )}
              </td>

              <td>
                {editingId === a.id ? (
                  <input
                    type="date"
                    value={editData.date}
                    onChange={e =>
                      setEditData({ ...editData, date: e.target.value })
                    }
                  />
                ) : (
                  a.date
                )}
              </td>

              <td>
                {editingId === a.id ? (
                  <input
                    value={editData.doctor}
                    onChange={e =>
                      setEditData({ ...editData, doctor: e.target.value })
                    }
                  />
                ) : (
                  a.doctor
                )}
              </td>

              <td>
                {editingId === a.id ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleUpdate(a.id)}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      setEditingId(a.id);
                      setEditData(a);
                    }}
                  >
                    Sửa
                  </button>
                )}

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDelete(a.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
}

export default ManageAppointments;