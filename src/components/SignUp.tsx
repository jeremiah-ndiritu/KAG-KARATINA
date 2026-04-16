import { useState, type ChangeEvent, type FormEvent } from "react";

type SignUpForm = {
  firstName: string;
  lastName: string;
  nickName: string;
  dob: string;
  phoneNumber: string;
  email: string;
  department: string;
  roles: string;
};

export default function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
    nickName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    department: "",
    roles: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const memberData = {
      name: {
        firstName: form.firstName,
        lastName: form.lastName,
        nickName: form.nickName,
      },
      dob: form.dob,
      phoneNumber: form.phoneNumber,
      email: form.email,
      department: form.department,
      roles: form.roles.split(",").map((r) => r.trim()),
    };

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/members/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(memberData),
      },
    );

    await res.json();
    alert("Member signed up successfully!");
  };

  return (
    <div className="mx-auto max-w-4xl rounded-4xl border border-border bg-surface/95 p-8 shadow-xl">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-heading">Member Sign Up</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { name: "firstName", label: "First Name", type: "text" },
            { name: "lastName", label: "Last Name", type: "text" },
            { name: "nickName", label: "Nick Name", type: "text" },
            { name: "dob", label: "Date of Birth", type: "date" },
            { name: "phoneNumber", label: "Phone Number", type: "tel" },
            { name: "email", label: "Email", type: "email" },
            { name: "department", label: "Department", type: "text" },
            { name: "roles", label: "Roles (comma separated)", type: "text" },
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-muted-foreground"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name as keyof SignUpForm]}
                onChange={handleChange}
                placeholder={field.label}
                className="w-full rounded-3xl border border-border bg-muted px-4 py-3 text-surface-foreground outline-none transition focus:border-accent"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
