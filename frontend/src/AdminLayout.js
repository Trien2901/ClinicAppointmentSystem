import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "240px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h3 style={{ marginBottom: "30px" }}>🏥 Admin</h3>

        <Link to="/admin" style={linkStyle}>📊 Dashboard</Link>
        <Link to="/admin/appointments" style={linkStyle}>📅 Appointments</Link>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, background: "#f1f5f9" }}>

        {/* HEADER */}
        <div style={{
          background: "white",
          padding: "15px 25px",
          borderBottom: "1px solid #ddd"
        }}>
          <h4>Welcome Admin 👨‍💼</h4>
        </div>

        {/* PAGE CONTENT */}
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
}

const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "8px"
};

export default AdminLayout;