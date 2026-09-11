import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/resident/Dashboard";
import Announcements from "../pages/resident/Announcements";
import Complaints from "../pages/resident/Complaints";
import Events from "../pages/resident/Events";
import Visitors from "../pages/resident/Visitors";
import EmergencyContacts from "../pages/resident/EmergencyContacts";
import Profile from "../pages/resident/Profile";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageAnnouncements from "../pages/admin/ManageAnnouncements";
import ManageComplaints from "../pages/admin/ManageComplaints";
import ManageUsers from "../pages/admin/ManageUsers";

import SecurityDashboard from "../pages/security/SecurityDashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Resident Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["resident", "admin", "security"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/announcements"
        element={
          <ProtectedRoute allowedRoles={["resident", "admin"]}>
            <Announcements />
          </ProtectedRoute>
        }
      />

      <Route
        path="/complaints"
        element={
          <ProtectedRoute allowedRoles={["resident", "admin"]}>
            <Complaints />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events"
        element={
          <ProtectedRoute allowedRoles={["resident", "admin"]}>
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/visitors"
        element={
          <ProtectedRoute allowedRoles={["resident", "security"]}>
            <Visitors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/emergency"
        element={
          <ProtectedRoute allowedRoles={["resident", "admin", "security"]}>
            <EmergencyContacts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/announcements"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageAnnouncements />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageComplaints />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageUsers />
          </ProtectedRoute>
        }
      />

      {/* Security */}
      <Route
        path="/security"
        element={
          <ProtectedRoute allowedRoles={["security"]}>
            <SecurityDashboard />
          </ProtectedRoute>
        }
      />

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;