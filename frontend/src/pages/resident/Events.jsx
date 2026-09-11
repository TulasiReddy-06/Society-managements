import Layout from "../../components/layout/Layout";
import EventCard from "../../components/events/EventCard";
import { events } from "../../data/mockData";

const Events = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>Events & Meetings</h1>
          <p>Discover what's happening in your community.</p>
        </div>
      </div>

      <div className="cards-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Layout>
  );
};

export default Events;