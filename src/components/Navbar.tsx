import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:h-28 pt-2 sm:w-full sm:text-base text-sm items-center text-white flex justify-between sm:px-20 px-10">
      <div>
        <Link to="/about">
          <h1 className="sm:text-2xl">Atlan FE Task</h1>
        </Link>
      </div>

      <div className="flex sm:flex-row gap-2 sm:gap-10">
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
      </div>
    </div>
  );
};

export default Navbar;
