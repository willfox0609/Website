import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import { AudioProvider } from "./context/AudioContext";

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

function AppLayout() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* Global music provider wraps ALL logged-in pages */}
      <AudioProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* Default logged-in route */}
          {/* <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> */}
            {/* }
          /> */}
        </Routes>
      </AudioProvider>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* No music here */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Everything else uses the layout with global music */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
