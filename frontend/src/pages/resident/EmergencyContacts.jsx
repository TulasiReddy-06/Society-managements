import Layout from "../../components/layout/Layout";
import { Phone, ShieldAlert } from "lucide-react";

const contacts = [
  {
    name: "Society Security",
    number: "+91 9876543210",
  },
  {
    name: "Maintenance",
    number: "+91 9876543211",
  },
  {
    name: "Ambulance",
    number: "108",
  },
  {
    name: "Police",
    number: "100",
  },
  {
    name: "Fire",
    number: "101",
  },
];

const EmergencyContacts = () => {
  return (
    <Layout>
      <div className="page-header">
        <div>
          <h1>Emergency Contacts</h1>
          <p>Important contacts available when you need them.</p>
        </div>
      </div>

      <div className="cards-grid">
        {contacts.map((contact) => (
          <div className="content-card" key={contact.name}>
            <div className="card-icon">
              <ShieldAlert size={20} />
            </div>

            <div className="card-content">
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>

              <a
                className="call-button"
                href={`tel:${contact.number}`}
              >
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EmergencyContacts;