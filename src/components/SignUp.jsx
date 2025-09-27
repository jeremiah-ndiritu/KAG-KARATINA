import { useState } from "react";
import "../styles/SignUp.css";
import "../styles/formButton.css";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    department: "",
    roles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
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
      }
    );

    const data = await res.json();
    console.log(data);
    alert("Member signed up successfully!");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Member Sign Up</h2>

        <div className="form-grid">
          <div className="input-group">
            <input name="firstName" placeholder=" " onChange={handleChange} />
            <label>First Name</label>
          </div>

          <div className="input-group">
            <input name="lastName" placeholder=" " onChange={handleChange} />
            <label>Last Name</label>
          </div>

          <div className="input-group">
            <input name="nickName" placeholder=" " onChange={handleChange} />
            <label>Nick Name</label>
          </div>

          <div className="input-group">
            <input
              type="date"
              name="dob"
              placeholder=" "
              onChange={handleChange}
            />
            <label>Date of Birth</label>
          </div>

          <div className="input-group">
            <input name="phoneNumber" placeholder=" " onChange={handleChange} />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input name="department" placeholder=" " onChange={handleChange} />
            <label>Department</label>
          </div>

          <div className="input-group">
            <input name="roles" placeholder=" " onChange={handleChange} />
            <label>Roles (comma separated)</label>
          </div>
        </div>

        <button type="submit" className="form-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
