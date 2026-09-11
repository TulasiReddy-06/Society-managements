import { UserRound } from "lucide-react";

const VisitorCard = ({ visitor }) => {
  return (
    <div className="content-card">
      <div className="card-icon">
        <UserRound size={20} />
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{visitor.name}</h3>

          <span className="badge badge-status">
            {visitor.status}
          </span>
        </div>

        <p>Flat: {visitor.flatNumber}</p>
        <p>Purpose: {visitor.purpose}</p>
        <p>
          {visitor.date} • {visitor.time}
        </p>
      </div>
    </div>
  );
};

export default VisitorCard;