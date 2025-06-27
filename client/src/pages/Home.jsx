import React from "react";
import Header from "../components/Header";
import Footer from "../components/fOOTER.JSX";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="w-full h-fit flex gap-[3rem] items-center justify-center">
        <button className="bg-green-400 text-white font-bold h-[4rem] w-[9rem] rounded-lg text-4xl hover:bg-green-500">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="bg-green-400 text-white font-bold h-[4rem] w-[9rem] rounded-lg text-4xl hover:bg-green-500">
          <Link to={"/signup"}>Signup</Link>
        </button>
      </div>
  );
};

export default Home;
