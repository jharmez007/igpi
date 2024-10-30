import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

import { HomeButton, AnimatedSection } from '../../components';
import { socials, objectives } from '../../constants/dummy';
import { images } from '../../constants';
import './home.scss';

const Home = () => {
  const [ screenSize, setScreenSize ] = useState(undefined);
  const [ parallax, setParallax ] = useState(true);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setParallax(false);
    } else {
      setParallax(true);
    }
  }, [screenSize]);


  const goToAboutSection = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile screen size, go to Section 1
      return "/support#donate";
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet screen size, go to Section 2
      return "/support#donate1";
    } else {
      // Desktop screen size, go to Section 3
      return "/support#donate1";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="socials hidden lg:flex justify-center items-center flex-col  gap-6 py-6 px-5 w-4 fixed right-0 bottom-[40%] z-[10]">
        {socials.map((item, index) => (
          <div key={`title-${index}`}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {React.cloneElement(item.icon, { className: "fill-white hover:fill-[#fcbe27] ease-in duration-300" })}
            </a>
          </div>
        ))}
      </div>

      {parallax ?
        <Parallax className="z-[-999]" strength={600} bgImage={images.imgOne}>
          <div className="flex items-end justify-center h-[90vh] p-12 bg-cover bg-center z-[-999]">
            <h1 className="text-white p2__text font-bold text-6xl md:text-7xl lg:text-8xl max-w-[900px] text-center">Feeding Children, Empowering Women, and Training Farmers Worldwide</h1>
          </div>
        </Parallax> 
        :
        <div
          className="flex items-end justify-center h-screen p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.imgOne})` }}
        >
          <h1 className="text-white p2__text font-bold text-6xl md:text-7xl lg:text-8xl max-w-[900px] text-center">Feeding Children, Empowering Women, and Training Farmers Worldwide</h1>
        </div>
      }

      <div 
        className="flex flex-col md:flex-row text-white p__text"
      >
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#fcbe27] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#3f3c3467] ease-in duration-300" 
          headText="Our Initiatives"
          text="Our Vision and Impact"
          link="/aboutUs"
        />
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#0b8b68] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#2b3d38cc] ease-in duration-300" 
          headText="Contact Us"
          text="Get In Touch"
          link="/contact"
        />
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#034b38] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#000201c5] ease-in duration-300" 
          headText="Take Action"
          text="Support Our Cause"
          link={goToAboutSection}
        />
      </div>

      <AnimatedSection id="blogSection">
        <div className="app__flex min-h-[80vh] px-6 md:px-24 py-24 bg-white text-black">
          <div className="flex items-center justify-center flex-col w-full gap-16 md:gap-20">
            <div className="text-center">
              <h4 className="font-bold p2__text text-4xl text-[#0b8b68]">THE BLOG</h4>
              <h2 className="font-bold p2__text text-6xl md:text-7xl">NEWS & UPDATES</h2>
            </div>
            <div className="app__flex flex-col border  w-[100%] max-w-[1200px] px-6 py-60 text-center p__text">
              <h3 className="font-extrabold text-3xl">Check back soon</h3>
              <p>Once posts are published, you'll see them here.</p>
            </div>
            <button className="bg-[#fcbe27] text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-[#fcc027ce] ease-in duration-300">SEE MORE ON THE BLOG</button>
          </div>
        </div>
      </AnimatedSection>

      <div className="app__flex py-12 px-5 bg-[#0b8b68]">
        <AnimatedSection id="quote1">
          <div className="text-center text-white w-[100%] max-w-[860px]">
            <h3 className="text-2xl md:text-3xl italic mb-4">Every child deserves a chance to thrive, every woman deserves to be empowered, and every farmer deserves the opportunity to succeed.</h3>
            <p>Inclusive Growth and Prosperity Initiative</p>
          </div>
        </AnimatedSection>
      </div>

      <div 
        className="app__flex p-6 md:p-12 text-white bg-cover bg-center z-[-999]"
        style={{ backgroundImage: `url(${images.imgNine})` }}
      >
        <div className="flex justify-center items-center flex-col gap-16 md:gap-20">
          <div className="flex justify-center items-center flex-col gap-6">
            <h2 className="font-bold p2__text text-6xl md:text-7xl text-center">OUR OBJECTIVES</h2>
            <div className="app__div"/>
            <p className="p__text font-bold text-xl md:text-2xl text-center">Our community partners guide us and our objectives drive us.</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-6 flex-col lg:flex-row lg:flex-wrap w-[100%] max-w-[1200px]">
            {objectives.map((item) => (
              <div 
                className="flex justify-start items-center flex-col gap-4 text-center w-full lg:w-half md:min-h-[221px]"
                key={`title-${item.title}`}
              >
                <h4 className="p2__text text-4xl md:text-5xl font-extrabold">{item.title}</h4>
                <div className="app__div" />
                <p className="p__text font-bold text-lg md:text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#0b8b68]">
        <div className="app__flex flex-col">
          <div className="app__flex flex-col text-white gap-6 text-center">
            <AnimatedSection id="signUpSection">
              <h3 className="font-bold p2__text text-6xl md:text-7xl">BECOME A MEMBER</h3>
              <p className="p__text font-bold text-xl md:text-2xl text-center">Get exclusive updates on our work and how you can help.</p>
            </AnimatedSection>
            <button className="border-4 text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">SIGN UP TODAY</button>
          </div>
          <div className="flex lg:hidden justify-center items-center flex-row flex-wrap gap-6 py-6 mt-5">
            {socials.map((item, index) => (
              <div key={`title-${index}`}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {React.cloneElement(item.icon, { className: "fill-white hover:fill-[#fcbe27] w-[20px] h-[20px] md:w-[35px] md:h-[35px] ease-in duration-300" })}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



