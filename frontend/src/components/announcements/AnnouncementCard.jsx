import { Megaphone } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="content-card">
      <div className="card-icon">
        <Megaphone size={20} />
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{announcement.title}</h3>

          <span
            className={`badge ${
              announcement.priority === "Important"
                ? "badge-important"
                : "badge-normal"
            }`}
          >
            {announcement.priority}
          </span>
        </div>

        <p>{announcement.description}</p>

        <small>{announcement.date}</small>
      </div>
    </div>
  );
};

export default AnnouncementCard;