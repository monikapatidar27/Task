import React from "react";

const ContctSection = () => {
  return (
    <div
      className="w-full h-[100vh] relative"
      style={{
        background: "url('/images/herobg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div
        className="w-full h-full absolute"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <div className="w-full h-full  max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full grid grid-cols-2 gap-10">
              <div className="w-4/5 mx-auto p-4 py-20 bg-neutral-800">
                <h2 className="text-2xl font-sans  text-white font-semibold mb-6 text-center">
                  OUR QUALITY FOOD
                </h2>
                <div className="py-4">
                  <p className="text-white text font-semibold text-center mb-1">
                    MON - FRI
                  </p>
                  <p className="text-white text font-semibold text-center mb-1">
                    01:00AM - 04:00PM
                  </p>
                  <p className="text-white text font-semibold text-center mb-1">
                    01:00AM - 04:00PM
                  </p>
                </div>
                <div className="w-4/5 mx-auto h-[2px] bg-orange-400"></div>
                <div className="py-4">
                  <p className="text-white text font-semibold text-center mb-1">
                    SAT
                  </p>
                  <p className="text-white text font-semibold text-center mb-1">
                    01:00AM - 04:00PM
                  </p>
                </div>
                <div className="w-4/5 mx-auto h-[2px] bg-orange-400"></div>
                <div className="py-4">
                  <p className="text-white text font-semibold text-center mb-1">
                    SUN
                  </p>
                  <p className="text-white text font-semibold text-center mb-1">
                    We are closed
                  </p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button className="px-6 py-2 bg-orange-400 text-white  mx-auto rounded">
                    Make A Reservation
                  </button>
                </div>
              </div>

              <div className="w-4/5 mx-auto p-4 py-20 bg-neutral-800">
                <h2 className="text-2xl font-sans  text-white font-semibold mb-3 text-center">
                  Drop Us a Line
                </h2>
                <p className="w-4/5 mx-auto text-white  text-center text-sm font-medium  leading-6">
                  orem Ipsum is simply dummy text of the printing and
                  typesetting orem Ipsum is si
                </p>
                <div className="flex items-center justify-center mt-4">
                  <button className="px-6 py-2 bg-orange-400 text-white  mx-auto rounded">
                    Contact Us
                  </button>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-sans  text-white font-semibold mb-3 text-center">
                    Drop Us a Line
                  </h2>
                  <p className="w-4/5 mx-auto text-white  text-center text-sm font-medium  leading-6">
                    orem Ipsum is simply dummy text of the printing and
                  </p>

                </div>
                <div className=" pl-10 p-1">
                  <input className="w-4/5 mx-auto p-2 " placeholder="First name" />
                </div>
                <div className=" pl-10 p-1 ">
                  <input className="w-4/5 mx-auto p-2 " placeholder="Last name" />
                </div>
                <div className=" pl-10 p-1">
                  <input className="w-4/5 mx-auto p-2 " placeholder="Email" />
                </div>
                <div className=" pl-10 p-1">
                  <button className="w-4/5 p-2 bg-orange-400 text-white  mx-auto rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContctSection;
