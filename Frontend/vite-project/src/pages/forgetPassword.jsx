import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import '../css/forgetPassword.css';


function ForgetPassword() {
  const { API_URL } = useAuthContext();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  // Controls whether password field is shown
  const [emailVerified, setEmailVerified] = useState(false);

  // Verify Email
  const handleVerifyEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmailVerified(true);
        setMessage("Email verified. Enter your new password.");
      } else {
        setMessage(data.message || "Email not found.");
      }
    } catch (err) {
      setMessage("Network error.");
    }

    setLoading(false);
  };

  // Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/forget-password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password reset successfully!");
        setTimeout(() => {
            navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setMessage("Network error.");
    }

    setLoading(false);
  };

  return (
    <div className="reset-password-container">
      <h1>Forgot Password</h1>

      {!emailVerified ? (
        <form onSubmit={handleVerifyEmail}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      )}

      {message && (
        <p
          style={{
            color: message.toLowerCase().includes("success")? "green"
            : message.toLowerCase().includes("verified")? "green": "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default ForgetPassword;