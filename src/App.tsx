import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { settings } = useContext(SettingsContext);

  if (!settings.isLoggedIn) {
    return <Login />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
