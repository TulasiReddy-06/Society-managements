import Layout from "../../components/layout/Layout";
import VisitorCard from "../../components/visitors/VisitorCard";
import { visitors } from "../../data/mockData";
import Button from "../../components/common/Button";

const Visitors = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>Visitor Management</h1>
          <p>Manage your expected visitors.</p>
        </div>

        <Button>+ Register Visitor</Button>
      </div>

      <div className="cards-grid">
        {visitors.map((visitor) => (
          <VisitorCard key={visitor.id} visitor={visitor} />
        ))}
      </div>
    </Layout>
  );
};

export default Visitors;