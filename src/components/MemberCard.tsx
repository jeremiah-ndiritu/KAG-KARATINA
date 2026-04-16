import type { Member } from "@/types/member";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="rounded-4xl border border-border bg-surface/95 p-6 shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-accent text-xl font-bold text-accent-foreground shadow-sm">
        {member.name.firstName[0]}
        {member.name.lastName[0]}
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-heading">
          {member.name.firstName} {member.name.lastName}
          {member.name.nickName ? (
            <span className="text-sm font-normal text-muted-foreground">
              {" "}
              ({member.name.nickName})
            </span>
          ) : null}
        </h3>
        <p className="text-sm text-muted-foreground">📅 DOB: {member.dob}</p>
        <p className="text-sm text-muted-foreground">📱 {member.phoneNumber}</p>
        {member.email ? (
          <p className="text-sm text-muted-foreground">✉️ {member.email}</p>
        ) : null}
        <p className="text-sm text-muted-foreground">
          🧑‍🤝‍🧑 Department: {member.department}
        </p>
        {member.roles?.length ? (
          <p className="text-sm text-muted-foreground">
            Roles: {member.roles?.join(", ")}
          </p>
        ) : null}
      </div>
    </article>
  );
}
