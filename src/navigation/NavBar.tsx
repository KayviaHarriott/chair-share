import { Link } from "react-router-dom";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { KeyboardArrowRight } from "@mui/icons-material";

export const NavBar = () => {
  return (
    <div>
      <div className="bg-[#272727] text-gray-200 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-end items-center gap-4 py-1">
          <p className="text-sm">Become a Merchant</p>
          <p className="mb-1">|</p>
          <p className="text-sm">Contact Us</p>
          <p className="mb-1">|</p>
          <p className="text-sm">FAQs</p>
          {/* <KeyboardArrowRight/>  */}
        </div>
      </div>
      <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex justify-center py-4  px-4 text-gray-800 ">
        <div className="max-w-[1200px] w-full ">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex items-center gap-2">
              {/* <Link to="/"><img className="h-[50px]" src="./imgs/Logo.png" /></Link> */}
              <Link className="text-xl" to="/">
                <p>ChairShare</p>
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-center font-serif gap-6">
              <Link to="/about">How it Works</Link>
              <Link to="/merchants">Services</Link>
              <Link to="/">Near Me</Link>
            </div>
            <div className="w-1/3 flex justify-end items-center gap-6 font-serif">
              <Link to="/merchants">Sign In</Link>
              <Link
                className="bg-linear-to-br from-amber-500 to-[#BF4E30] px-6 py-2 text-white rounded-full"
                to="/register"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
