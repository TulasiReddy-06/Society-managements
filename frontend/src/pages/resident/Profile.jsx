import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your society profile.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          {user?.name?.charAt(0)}
        </div>

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>

        <div className="profile-details">
          <div>
            <strong>Role</strong>
            <span>{user?.role}</span>
          </div>

          <div>
            <strong>Flat Number</strong>
            <span>{user?.flatNumber}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;