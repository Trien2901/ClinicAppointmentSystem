
import Login from "./Login";
import Appointment from "./Appointment";
import Admin from "./Admin";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">
        🏥 Clinic Appointment System
      </h1>

      <div className="row">
        <div className="col-md-6">
          <Login />
        </div>

        <div className="col-md-6">
          <Appointment />
        </div>
      </div>
      {user?.role === "Admin" && <Admin />}
    </div>
    
  );
}

export default App;

