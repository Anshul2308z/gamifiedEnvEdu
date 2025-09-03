import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const endpoint = isRegister ? "/auth/register" : "/auth/login";

    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      if (isRegister) {
        alert("Account created! Now login.");
        setIsRegister(false);
      } else {
        localStorage.setItem("token", data.token);
        alert("Logged in!");
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>{isRegister ? "Create Account" : "Login"}</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">
            {isRegister ? "Sign Up" : "Login"}
          </button>
          <p>
            {isRegister ? "Already have an account?" : "No account yet?"}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "Login" : "Create one"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
