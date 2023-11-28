import React from 'react'

const Testimonial = () => {
  return (
    <div className='pt-10'>
      <div className="relative">
      <div
        className="w-full h-full absolute top-0 left-0 z-[0]"
        style={{ background: "rgba(0,0,0,0.1)" }}
      ></div>
      <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto ">
        <div className="w-full py-20">
        <h4 className="w-max mx-auto text-center text-orange-400 font-bold text-md mb-2 before:content-[''] relative before:w-3/5 before:h-[2px] before:bg-orange-400 before:absolute before:bottom-0 before:left-[20%]">
        ONLY THE BEST
        </h4>
        
          <h2 className="text-4xl font-sans text-black font-semibold text-center ">
            Fresh Ingredient,Tasty Meal
          </h2>
          <p className="w-3/5 mx-auto text-gray-800 text-center text-sm font-medium my-8 leading-6">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. orem Ipsum Lorem Ipsum has been the
            industry's since the 1500s, w
          </p>

          <div className="w-max mx-auto flex items-center gap-4">
            
            <button className="px-6 py-2 text-md font-medium text-white bg-orange-400 border-2 border-orange-400">
              View items
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonial