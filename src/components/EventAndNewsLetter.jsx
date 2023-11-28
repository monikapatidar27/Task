import React from "react";

const EventCard = ()=>{
    return(
        <div className="w-[320px]">
            <div className="w-full h-[240px]">
                <img src="/images/herobg.jpg" className="w-full h-full object-cover overflow-hidden"/>
            </div>
            <div className="my-2">
                <h2 className="text-xl font-semibold mb-1">lorem lorem</h2>
                <h2 className="text-md text-orange-400">Category</h2>
            </div>
            <p className=" text-sm font-medium leading-6">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. orem Ipsum Lorem Ipsum has been the
            industry's since the 1500s, w
          </p>

        </div>
    )
}

const NewsAndEvents = () => {
  return (
    <div className="p-8">
      <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-10 mx-auto">
      <div className="w-full">
        <h4 className="w-max mx-auto text-center text-orange-400 font-bold text-md mb-2 before:content-[''] relative before:w-3/5 before:h-[2px] before:bg-orange-400 before:absolute before:bottom-0 before:left-[20%]">
          DON'T MISS
        </h4>
        <h2 className="text-4xl font-sans  font-semibold text-center my-6">
          OUR QUALITY FOOD
        </h2>

        <p className="w-3/5 mx-auto  text-center text-sm font-medium  leading-6 mb-5">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-5 mb-10 ">
        <EventCard />
        <EventCard />
        <EventCard />



      </div>
    </div>
    </div>
  );
};

export default NewsAndEvents;
