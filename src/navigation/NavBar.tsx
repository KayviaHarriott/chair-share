import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex justify-center py-4 border-b border-gray-200 px-4 text-gray-500 bg-white">
      <div className="max-w-[1200px] w-full ">
        <div className="w-full flex justify-between items-center">
          <div className="w-1/3">
            <Link to="/">ChairShare</Link>
          </div>
          <div className="w-1/3 flex items-center justify-between gap-4">
            <Link to="/">Services</Link>
            <Link to="/about">How it Works</Link>
            <Link to="/merchants">Merchants</Link>
          </div>
          <div className="w-1/3 flex justify-end items-center gap-3">
            <Link to="/merchants">Sign In</Link>
              <Link className="bg-amber-500 px-6 py-2 text-white rounded-full" to="/register">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
