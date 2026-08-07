import { Link } from "react-router-dom";
import { getToken } from "../utils/auth";

function Profile() {
  const user = getToken();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Profile</h1>

      <h3>Role: {user?.role}</h3>

      <Link to={user?.role === "admin" ? "/admin" : "/user"}>
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Profile;