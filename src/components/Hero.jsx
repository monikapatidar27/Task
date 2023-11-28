import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-full absolute top-0 left-0 -z-[1]">
        <img src="/images/herobg.jpg" className="w-full h-full object-cover" />
      </div>
      <div
        className="w-full h-full absolute top-0 left-0 z-[0]"
        style={{ background: "rgba(0,0,0,0.6)" }}
      ></div>
      <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto relative z-1">
        <div className="w-full py-20">
          <h2 className="text-4xl font-sans text-white font-semibold text-center ">
            OUR QUALITY FOOD
          </h2>
          <p className="w-3/5 mx-auto text-gray-300 text-center text-sm font-medium my-8 leading-6">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. orem Ipsum Lorem Ipsum has been the
            industry's since the 1500s, w
          </p>

          <div className="w-max mx-auto flex items-center gap-4">
            <button className="px-6 py-2 text-md font-medium text-white border-2 border-white ">
              View Menu
            </button>
            <button className="px-6 py-2 text-md font-medium text-white bg-orange-400 border-2 border-orange-400">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
