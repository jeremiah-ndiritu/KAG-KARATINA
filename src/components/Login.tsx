import { useState, type ChangeEvent, type FormEvent } from "react";

type LoginForm = {
  email: string;
  phoneNumber: string;
};

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: "", phoneNumber: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/members/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      },
    );

    const data = await res.json();
    if (data.success) alert(`Welcome ${data.member.name.firstName}!`);
    else alert("Member not found");
  };

  return (
    <div className="mx-auto max-w-md rounded-4xl border border-border bg-surface/95 p-8 shadow-xl">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-heading">Member Login</h2>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-3xl border border-border bg-muted px-4 py-3 text-surface-foreground outline-none transition focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-muted-foreground"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-3xl border border-border bg-muted px-4 py-3 text-surface-foreground outline-none transition focus:border-accent"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Login
        </button>
      </form>
    </div>
  );
}
