import { Axios } from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await Axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <h1 className="registerTitle">Register</h1>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something went wrong!
              </span>
            )}
          </div>
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>

        <div className="d-flex pt">
          <p>Already Have An Account?</p>
          <div>
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
