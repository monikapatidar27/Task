import React from 'react';

import './styles/about.css'

const About = () => {
  

  return (
    <section>
    <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto pt-10">
      <div className='main_container'>
        <div className='about'>
          <div className='main-left'>
            <img src="https://picsum.photos/400/400" alt='about' width={400} height={400}></img>
          </div>
          <div className='main-right'>
            <h1>Who we are?</h1>
            <p className='text-start'>Vivamus consectetuer rerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.<br></br>
             itor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius. hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.<br></br>
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius.
            </p>
            
            
          </div>
        </div>
        
      </div>
      </div>
    </section>
  )
}

export default About;
