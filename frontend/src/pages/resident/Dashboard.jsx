import { Megaphone, MessageSquare, CalendarDays } from "lucide-react";

import Layout from "../../components/layout/Layout";
import StatCard from "../../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>Good Morning, Viswal! 👋</h1>
          <p>Welcome back to your society dashboard.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Announcements"
          value="5"
          icon={<Megaphone />}
        />

        <StatCard
          title="My Complaints"
          value="2"
          icon={<MessageSquare />}
        />

        <StatCard
          title="Upcoming Events"
          value="3"
          icon={<CalendarDays />}
        />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h2>Latest Announcements</h2>
          </div>

          <div className="announcement-preview">
            <h3>Water Supply Maintenance</h3>
            <p>
              Water supply will be unavailable tomorrow from
              10:00 AM to 1:00 PM.
            </p>

            <small>Posted today</small>
          </div>

          <div className="announcement-preview">
            <h3>Society Meeting</h3>
            <p>
              Monthly society meeting will be held this Sunday.
            </p>

            <small>Posted yesterday</small>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Upcoming Event</h2>
          </div>

          <div className="event-preview">
            <span className="event-date">15 SEP</span>

            <div>
              <h3>Society Sports Day</h3>
              <p>Community Ground</p>
              <p>9:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;