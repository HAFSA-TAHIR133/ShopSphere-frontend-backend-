import { Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn} = useLoginContext();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;