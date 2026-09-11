import { CalendarDays } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="content-card">
      <div className="card-icon">
        <CalendarDays size={20} />
      </div>

      <div className="card-content">
        <h3>{event.title}</h3>

        <p>{event.description}</p>

        <div className="event-details">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
          <span>📍 {event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;