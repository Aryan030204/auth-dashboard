import { useState } from "react";
import axios from "axios";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        formData
      );
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setTimeout(() => {
        Navigate("/dashboard");
      }, 2000)
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-inherit">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-300 p-8 flex flex-col rounded shadow-md w-96 h-1/2 items-center justify-center space-y-4"
      >
        <h2 className="text-3xl text-center font-bold text-red-500">LOGIN</h2>
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
          type={show === true ? "text" : "password"}
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {show === false ? (
          <FaEye onClick={() => setShow(true)} className="relative bottom-[2.7rem] left-[9rem] " />
        ) : (
          <FaEyeSlash onClick={() => setShow(false)} className="relative bottom-[2.7rem] left-[9rem] " />
        )}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Login
        </button>
        <h1>Not a User ? <Link to={"/signup"} className="text-red-900 hover:underline">Signup</Link></h1>
      </form>
    </div>
  );
}
