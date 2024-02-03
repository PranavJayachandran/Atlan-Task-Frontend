import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-28 items-center text-white flex justify-between px-20">
      <div>
        <h1 className="text-2xl">Atlan FE Task</h1>
      </div>

      <div className="flex gap-10">
        <Link
          to="/about"
          className="transition ease-in-out border-b border-transparent hover:border-white cursor-pointer "
        >
          About
        </Link>
        <Link
          to="/projects"
          className="transition ease-in-out border-b border-transparent hover:border-white cursor-pointer "
        >
          Projects
        </Link>
        <Link
          to="/favourites"
          className="transition ease-in-out border-b border-transparent hover:border-white cursor-pointer "
        >
          Favourites
        </Link>
        <Link
          to="/projects"
          className="transition ease-in-out border-b border-transparent hover:border-white cursor-pointer "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
