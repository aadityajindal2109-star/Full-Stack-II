import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* Protected Admin Route */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Protected User Route */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <User />
          </ProtectedRoute>
        }
      />

      {/* Protected Profile Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;