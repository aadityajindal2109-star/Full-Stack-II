import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function User() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>User Dashboard</h1>

      <p>Welcome, User!</p>

      <br />

      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>

      <br />
      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;