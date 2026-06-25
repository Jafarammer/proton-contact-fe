import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages";
import ForgotPassword from "./pages/forgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
