import { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";
import "../styles/Members.css";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/members`
        );
        const data = await res.json();
        setMembers(data || []);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-page">
      <h2 className="members-title">Church Members</h2>
      <div className="members-grid">
        {members.length > 0 ? (
          members.map((m) => <MemberCard key={m.id} member={m} />)
        ) : (
          <p>No members found.</p>
        )}
      </div>
    </div>
  );
}
