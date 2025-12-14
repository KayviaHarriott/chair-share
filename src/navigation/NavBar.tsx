import { Link } from "react-router-dom";
import { useState } from "react";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
// Categories data structure
const categories = [
  {
    name: "Hair",
    subcategories: [
      {
        title: "Braids",
        items: ["Box Braids", "Knotless Braids", "Feed-in Braids", "Locs (starter /retwist)", "Cornrows", "Twists"]
      },
      {
        title: "Natural Hair",
        items: ["Silk Press", "Wash & Style", "Blowout", "Conditioning Treatment", "Two-Strand Twist", "Curl Definition"]
      },
      {
        title: "Weaves/Wigs",
        items: ["Sew-ins", "Wig Installs", "Quick Weaves"]
      }
    ]
  },
  {
    name: "Barbering",
    subcategories: [
      {
        title: "Hair Services",
        items: ["Shape-up / Line-up", "Fade", "Taper", "Beard grooming", "Full haircut", "Kids cut"]
      },
      {
        title: "Add-Ons",
        items: ["Hot towel treatment", "Razor finish"]
      }
    ]
  },
  {
    name: "Nails",
    subcategories: [
      {
        title: "Acrylics",
        items: ["Full set", "Refill", "Removal", "Ombre", "Encapsulated Designs"]
      },
      {
        title: "Press-Ons",
        items: ["Custom press-ons", "Basic press-ons", "Press-on application"]
      },
      {
        title: "Gel/Polish",
        items: ["Regular polish", "Gel polish", "Nail art", "French tips"]
      }
    ]
  },
  {
    name: "Lashes",
    subcategories: [
      {
        title: "Lash Services",
        items: ["Classic Lashes", "Volume Lashes", "Hybrid Lashes", "Lash Lift", "Lash Tint", "Lash Removal"]
      },
      {
        title: "Add-Ons",
        items: ["Brow tinting", "Lash lift combo"]
      }
    ]
  },
  {
    name: "Makeup",
    subcategories: [
      {
        title: "Makeup Services",
        items: ["Bridal Makeup", "Special Event Makeup", "Everyday Makeup", "Airbrush Makeup", "Makeup Lessons", "Brow Shaping"]
      },
      {
        title: "Add-Ons",
        items: ["False lashes", "Touch-up kit"]
      }
    ]
  }
];

export const NavBar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div>
      <div className="bg-[#272727] text-gray-200 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-end items-center gap-4 py-1 px-5 ">
          <p className="text-sm">Become a Merchant</p>
          <p className="mb-1">|</p>
          <p className="text-sm">Contact Us</p>
          <p className="mb-1">|</p>
          <p className="text-sm">FAQs</p>
        </div>
      </div>
      <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex flex-col justify-center pt-4 items-center ">
        <div className="max-w-[1200px] px-4 pb-2 w-full">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex items-center gap-2 mb-1">
              <Link to="/">
                <img className="h-[50px]" src="./imgs/HorizontalLogo.png" />
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-center gap-6">
              <Link to="/about">How it Works</Link>
              <Link to="/merchants">Services</Link>
              <Link to="/">Near Me</Link>
            </div>
            <div className="w-1/3 flex justify-end items-center gap-6 ">
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

        <div className="border-t w-full pt-2 border-gray-200 flex items-center justify-center">
          <div className="max-w-[1200px] w-full flex gap-8 pb-4 pt-1 px-4 ">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center">
                  {category.name} <KeyboardArrowDownRounded sx={{marginTop: "3px"}}/>
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>
     <div className="">
       {categories.map((category) => (
         hoveredCategory === category.name && (
           <div key={category.name} className="absolute top-full left-0 w-full bg-white   border-gray-200 px-6 pt-5 pb-8 z-50 flex justify-center">
            <div className="max-w-[1200px] w-full px-4"> 
             <div className="flex gap-24 ">
               {category.subcategories.map((subcategory, index) => (
                 <div key={index}>
                   <p className="pb-2 font-bold ">{subcategory.title}</p>
                   <ul className="space-y-1 text-gray-800">
                     {subcategory.items.map((item, itemIndex) => (
                       <li key={itemIndex} className="hover:text-amber-600 cursor-pointer">
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div></div>
           </div>
         )
       ))}
     </div>
    </div>
  );
};
