import { useState } from "react";
import { getDeviceName } from "../utils/device.js";
import {useAuthContext} from '../context/authContext.jsx';
import { Link,useNavigate } from "react-router-dom";
import '../css/login.css';

function Login() {
  const {login,API_URL} = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [newPassword,setNewPassword]=useState("");
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",  
        body: JSON.stringify({ 
          email, 
          password,
          deviceName: getDeviceName()  
        }),
      });

      const data = await res.json();

      if (res.ok) {
        login(
        data.data.user, 
        data.data.accessToken, 
        data.data.refreshToken
    );
        setMessage("Login successful!");
        // Redirect to home page
        setTimeout(() => {
          navigate("/home");
        }, 2000);

      } else {
        setMessage(data.message || "Login failed");
      }
    }
    catch(err){
    console.error(err);
    setMessage(err.message);
}
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-Container">
      <h2>Welcome Back</h2>
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <br />
          {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p><Link to="/forgot-password">Forgot Password?</Link></p>
      </div>
    </div>
  );
}

export default Login;