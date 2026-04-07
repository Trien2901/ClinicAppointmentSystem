import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Appointment from "./Appointment";

import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import ManageAppointments from "./ManageAppointments";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* USER */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="appointments" element={<ManageAppointments />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;