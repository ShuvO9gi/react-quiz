import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet {...rest} /> : <Navigate to="/" />;
}
