import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto">
    <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto">
      <div className="w-full flex items-center justify-between py-4">
        <h2 className="text-xl">Reastaurant Landing Page</h2>

        <div className="flex justify-center items-center gap-5">
          <ul className="flex items-center justify-center gap-5 text-md font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Cotact</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;