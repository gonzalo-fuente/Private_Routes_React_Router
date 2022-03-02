import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
