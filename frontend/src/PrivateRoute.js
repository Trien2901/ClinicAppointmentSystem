import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user || user.role !== "Admin") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;