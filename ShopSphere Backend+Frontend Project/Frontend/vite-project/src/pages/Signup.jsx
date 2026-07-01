import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000/api/v1/shopSphere";

function Signup() {
    const navigate=useNavigate();
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await res.json();

      if (res.ok) {


        if (res.ok) {
            setMessage("Signup successful! You can now login.");
            setMessageType("success");
        
            // Clear form
            setName("");
            setLastName("");
            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("/login");
            }, 2000);
            }
      } 
      else {
        setMessage(data.message || "Signup failed");
        setMessageType("error");
      }
    } 
    catch (err) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-Container">
      <h2>Welcome</h2>

      <div className="signup-login-container">
        <h3>Sign up</h3>

        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Enter Name" value={firstName}
            onChange={(e) => setName(e.target.value)} required />
          <br /><br />

          <input type="text" placeholder="Enter Last Name" value={lastName}
            onChange={(e) => setLastName(e.target.value)} required />
          <br /><br />

          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <br /><br />

          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <br /><br />

          {message && (
            <p style={{ color: messageType === "success" ? "green" : "red",marginBottom: "10px" }}>
              {message}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;