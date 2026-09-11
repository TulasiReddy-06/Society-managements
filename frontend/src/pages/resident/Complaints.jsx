import Layout from "../../components/layout/Layout";
import ComplaintCard from "../../components/complaints/ComplaintCard";
import { complaints } from "../../data/mockData";
import Button from "../../components/common/Button";

const Complaints = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>My Complaints</h1>
          <p>Track and manage your service requests.</p>
        </div>

        <Button>+ New Complaint</Button>
      </div>

      <div className="cards-grid">
        {complaints.map((complaint) => (
          <ComplaintCard
            key={complaint.id}
            complaint={complaint}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Complaints;