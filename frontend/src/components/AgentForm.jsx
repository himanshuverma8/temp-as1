// src/components/AgentForm.jsx
import { useState } from "react";
import axios from "axios";

export default function AgentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",   // <-- matches backend field
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    // simple required-field check
    if (!form.name || !form.email || !form.mobile || !form.password) {
      return alert("Please fill in every field.");
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5001/api/agents", form, {
        withCredentials: true, // in case JWT cookie is used
      });
      alert("✅ Agent added");
      setForm({ name: "", email: "", mobile: "", password: "" });
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.error || "Failed to add agent. See console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm p-4 border rounded space-y-3">
      <h3 className="text-xl font-semibold">Add Agent</h3>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="mobile"
        placeholder="Mobile (+country-code)"
        value={form.mobile}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60"
      >
        {loading ? "Saving..." : "Add Agent"}
      </button>
    </div>
  );
}
