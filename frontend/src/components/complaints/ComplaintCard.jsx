import { MessageSquare } from "lucide-react";

const ComplaintCard = ({ complaint }) => {
  return (
    <div className="content-card">
      <div className="card-icon">
        <MessageSquare size={20} />
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{complaint.title}</h3>

          <span className="badge badge-status">
            {complaint.status}
          </span>
        </div>

        <p>Category: {complaint.category}</p>

        <p>Priority: {complaint.priority}</p>

        <small>
          {complaint.id} • {complaint.date}
        </small>
      </div>
    </div>
  );
};

export default ComplaintCard;