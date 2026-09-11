import { Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="navbar">
      <div>
        <h2>SocietyHub</h2>
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <Bell size={20} />
        </button>

        <div className="user-info">
          <strong>{user?.name}</strong>
          <span>{user?.role}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;