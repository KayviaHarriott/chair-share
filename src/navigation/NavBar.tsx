import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="w-1/3 bg-blue-100">
        <p>ChairShare</p>
      </div>
      <div className="w-1/3 bg-red-100 flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">How it Works</Link>
        <Link to="/merchants">Merchants</Link>
      </div>

      <div className="w-1/3 bg-purple-100 flex justify-end">
        <Link to="/merchants">Sign In</Link>
        <Link to="/merchants">Get Started</Link>
      </div>
    </nav>
  );
};
