import React from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <header className="w-full bg-violet-700 text-white flex justify-around items-center p-4 shadow-sm shadow-purple-800 sticky top-0">
      <div className="text-3xl font-bold">Do-Too</div>
      <nav>
        <Link className="px-2 py-1 mx-2 my-1 hover:text-slate-400" to="/">All Items</Link>
        <Link className="px-2 py-1 mx-2 my-1 hover:text-slate-400" to="/completed">Completed</Link>
        <Link className="px-2 py-1 mx-2 my-1 hover:text-slate-400" to="/incomplete">Incomplete</Link>
      </nav>
    </header>
  );
};
