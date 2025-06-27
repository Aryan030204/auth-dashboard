import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/signup/", formData);
      alert("Signup successful!");
    } catch (err) {
      console.error(err);
      alert("Signup failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-inherit">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-300 p-8 flex flex-col rounded shadow-md w-96 h-1/2 items-center justify-center space-y-4"
      >
        <h2 className="text-3xl text-red-500 font-bold">Signup</h2>
        <input
          className="w-full border p-2 bg-white rounded-xl border-none"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          className="w-full border p-2 bg-white rounded-xl border-none"
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="w-full border p-2 bg-white rounded-xl border-none"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
        <h1>Already a User? <Link to={"/login"} className="text-red-800 hover:underline">Login</Link></h1>
      </form>
    </div>
  );
}
