import "../styles/MemberCard.css";

export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-avatar">
        {member.name.firstName[0]}
        {member.name.lastName[0]}
      </div>
      <div className="member-info">
        <h3>
          {member.name.firstName} {member.name.lastName}
          {member.name.nickName && (
            <span className="nickname"> ({member.name.nickName})</span>
          )}
        </h3>
        <p className="member-meta">📅 DOB: {member.dob}</p>
        <p className="member-meta">📱 {member.phoneNumber}</p>
        {member.email && <p className="member-meta">✉️ {member.email}</p>}
        <p className="member-meta">🧑‍🤝‍🧑 Department: {member.department}</p>
        {member.roles?.length > 0 && (
          <p className="member-roles">Roles: {member.roles.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
