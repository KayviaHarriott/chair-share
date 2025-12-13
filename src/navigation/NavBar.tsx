import { Link } from "react-router-dom";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { KeyboardArrowRight } from "@mui/icons-material";

export const NavBar = () => {
  return (
    <div>
      <div className="bg-[#272727] text-gray-200 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-end items-center gap-4 py-1 px-5">
          <p className="text-sm">Become a Merchant</p>
          <p className="mb-1">|</p>
          <p className="text-sm">Contact Us</p>
          <p className="mb-1">|</p>
          <p className="text-sm">FAQs</p>
          {/* <KeyboardArrowRight/>  */}
        </div>
      </div>
      <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex flex-col justify-center py-4  px-4 text-gray-800 ">
        <div className="max-w-[1200px] w-full ">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex items-center gap-2 mb-1">
              <Link to="/">
                <img className="h-[50px]" src="./imgs/HorizontalLogo.png" />
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

        <div className="flex flex-col gap-6">
          <a>
            <p className="font-bold text-lg">Hair</p>

            <div className="flex gap-4">
              <div>
                <b>Braids</b>
                <ul>
                  <li>Box Braids</li>
                  <li>Knotless Braids</li>
                  <li>Feed-in Braids</li>
                  <li>Locs (starter /retwist)</li>
                  <li>Cornrows</li>
                  <li>Twists</li>
                </ul>
              </div>

              <div>
                <b>Natural Hair</b>
                <ul>
                  <li>Silk Press</li>
                  <li>Wash & Style</li>
                  <li>Blowout</li>
                  <li>Conditioning Treatment</li>
                  <li>Two-Strand Twist</li>
                  <li>Curl Definition</li>
                </ul>
              </div>
              <div>
                <b>Weaves/Wigs</b>
                <ul>
                  <li>Sew-ins</li>
                  <li>Wig Installs</li>
                  <li>Quick Weaves</li>
                </ul>
              </div>
            </div>
          </a>

          <a>
            <p className="font-bold text-lg">Barbering</p>
            <div className="flex gap-4">
              <div>
                <b>Hair Services</b>
                <ul>
                  <li>Shape-up / Line-up</li>
                  <li>Fade</li>
                  <li>Taper</li>
                  <li>Beard grooming</li>
                  <li>Full haircut</li>
                  <li>Kids cut</li>
                </ul>
              </div>

              <div>
                <b>Add-Ons</b>
                <ul>
                  <li>Hot towel treatment</li>
                  <li>Razor finish</li>
                </ul>
              </div>
            </div>
          </a>

          <a>
            <p className="font-bold text-lg">Nails</p>
            <div className="flex gap-4">
              <div>
                <b>Acrylics</b>
                <ul>
                  <li>Full set</li>
                  <li>Refill</li>
                  <li>Removal</li>
                  <li>Ombre</li>
                  <li>Encapsulated Designs</li>
                </ul>
              </div>

              <div>
                <b>Press-Ons</b>
                <ul>
                  <li>Custom press-ons</li>
                  <li>Basic press-ons</li>
                  <li>Press-on application</li>
                </ul>
              </div>

              <div>
                <b>Gel/Polish</b>
                <ul>
                  <li>Regular polish</li>
                  <li>Gel polish</li>
                  <li>Nail art</li>
                  <li>French tips</li>
                </ul>
              </div>
            </div>
          </a>
          <a>
            <p className="font-bold text-lg">Lashes</p>
            <div className="flex gap-4">
              <div>
                <b>Hair Services</b>
                <ul>
                  <li>Shape-up / Line-up</li>
                  <li>Fade</li>
                  <li>Taper</li>
                  <li>Beard grooming</li>
                  <li>Full haircut</li>
                  <li>Kids cut</li>
                </ul>
              </div>

              <div>
                <b>Add-Ons</b>
                <ul>
                  <li>Hot towel treatment</li>
                  <li>Razor finish</li>
                </ul>
              </div>
            </div>
          </a>
         <a>
            <p className="font-bold text-lg">Makeup</p>
            <div className="flex gap-4">
              <div>
                <b>Hair Services</b>
                <ul>
                  <li>Shape-up / Line-up</li>
                  <li>Fade</li>
                  <li>Taper</li>
                  <li>Beard grooming</li>
                  <li>Full haircut</li>
                  <li>Kids cut</li>
                </ul>
              </div>

              <div>
                <b>Add-Ons</b>
                <ul>
                  <li>Hot towel treatment</li>
                  <li>Razor finish</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};
