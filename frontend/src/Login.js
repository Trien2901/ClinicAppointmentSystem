import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("http://localhost:5089/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (!res.ok) throw new Error("Sai tài khoản hoặc mật khẩu");
        return res.json();
      })
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data)); // 👉 LƯU USER + ROLE
        alert("Đăng nhập thành công");
        window.location.reload(); // reload để hiển thị admin
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="card p-3 shadow">
      <h3 className="text-center">Login</h3>

      <input
        className="form-control my-2"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        className="form-control my-2"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;