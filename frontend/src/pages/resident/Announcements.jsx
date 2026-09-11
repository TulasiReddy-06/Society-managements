import Layout from "../../components/layout/Layout";
import AnnouncementCard from "../../components/announcements/AnnouncementCard";
import { announcements } from "../../data/mockData";

const Announcements = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>Announcements</h1>
          <p>Stay updated with society notices.</p>
        </div>
      </div>

      <div className="cards-grid">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Announcements;