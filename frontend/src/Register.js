import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm: "",
    role: "User"
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!form.username || !form.password || !form.confirm) {
      alert("❌ Không được để trống");
      return;
    }

    if (form.password !== form.confirm) {
      alert("❌ Mật khẩu không khớp");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find(u => u.username === form.username);
    if (exist) {
      alert("❌ Username đã tồn tại");
      return;
    }

    users.push({
      username: form.username,
      password: form.password,
      role: form.role
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Đăng ký thành công");
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>

      <input
        placeholder="Username"
        className="form-control mb-2"
        onChange={e => setForm({ ...form, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-2"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="form-control mb-2"
        onChange={e => setForm({ ...form, confirm: e.target.value })}
      />

      <select
        className="form-control mb-2"
        onChange={e => setForm({ ...form, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>

      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;