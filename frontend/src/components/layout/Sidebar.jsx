import {
  Home,
  Megaphone,
  MessageSquare,
  CalendarDays,
  Users,
  Phone,
  User,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>🏠 SocietyHub</h2>
      </div>

      <nav>
        <NavLink to="/dashboard">
          <Home size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/announcements">
          <Megaphone size={18} />
          Announcements
        </NavLink>

        <NavLink to="/complaints">
          <MessageSquare size={18} />
          Complaints
        </NavLink>

        <NavLink to="/events">
          <CalendarDays size={18} />
          Events
        </NavLink>

        <NavLink to="/visitors">
          <Users size={18} />
          Visitors
        </NavLink>

        <NavLink to="/emergency">
          <Phone size={18} />
          Emergency
        </NavLink>

        <NavLink to="/profile">
          <User size={18} />
          Profile
        </NavLink>
      </nav>

      {user?.role === "admin" && (
        <div className="sidebar-admin">
          <p>ADMIN</p>

          <NavLink to="/admin">
            Admin Dashboard
          </NavLink>

          <NavLink to="/admin/announcements">
            Manage Announcements
          </NavLink>

          <NavLink to="/admin/complaints">
            Manage Complaints
          </NavLink>

          <NavLink to="/admin/users">
            Manage Users
          </NavLink>
        </div>
      )}

      {user?.role === "security" && (
        <div className="sidebar-admin">
          <p>SECURITY</p>

          <NavLink to="/security">
            Security Dashboard
          </NavLink>
        </div>
      )}

      <button className="logout-button" onClick={handleLogout}>
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;