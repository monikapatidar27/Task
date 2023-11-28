import React from "react";

const MenuImage = ({ imgUrl }) => {
  return (
    <div className="w-full aspect-square">
      <img className="w-full h-full object-cover" src={imgUrl} />
    </div>
  );
};

const MenuCard = () => {
  return (
    <div className="w-full aspect-square p-8 bg-white flex items-center justify-center">
      <div>
        <h2 className="text-2xl font-semibold text-orange-400 text-center">
          $26.90
        </h2>
        <h2 className="text-3xl font-semibold text-center my-4">Lorem Lorem</h2>
        <p className="text-sm font-medium  leading-6">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. orem Ipsum Lorem Ipsum has been the
            industry's since the 1500s, w
          </p>
      </div>
    </div>
  );
};

const Menus = () => {
  return (
    <div className="bg-neutral-800 my-20">
      <div className="  w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto">
        <div className="w-full grid grid-cols-3">
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />
          <MenuCard />
          <MenuImage imgUrl={"/images/herobg.jpg"} />

        </div>
      </div>
    </div>
  );
};

export default Menus;
