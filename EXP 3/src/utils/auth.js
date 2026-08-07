export const login = (role) => {
  const token = {
    role: role,
    token: "jwt-demo-token-123",
  };

  localStorage.setItem("token", JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};