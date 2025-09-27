import { useState } from "react";
import "../styles/Login.css"; // import styles
import "../styles/formButton.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", phoneNumber: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/members/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
    if (data.success) alert(`Welcome ${data.member.name.firstName}!`);
    else alert("Member not found");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Member Login</h2>

        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder=" "
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
    </div>
  );
}
