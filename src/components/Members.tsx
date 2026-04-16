import { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";
import type{ Member } from "@/types/member";

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/members`,
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
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <h2 className="text-3xl font-semibold text-heading">Church Members</h2>
      {members.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {members.map((m) => (
            <MemberCard key={m.email} member={m} />
          ))}
        </div>
      ) : (
        <p className="rounded-3xl border border-border bg-surface/90 p-6 text-center text-muted-foreground shadow-sm">
          No members found.
        </p>
      )}
    </div>
  );
}
