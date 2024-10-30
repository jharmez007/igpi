import React from 'react';
import { useNavigate } from 'react-router-dom';

import { aboutData } from '../../constants/dummy';
import { images } from '../../constants';
import { Mission, AnimatedSection } from '../../components';
import './aboutUs.scss';


const customClass = 'absolute top-0 bottom-0 right-0 left-0 bg-black opacity-15 hover:opacity-50 ease-in duration-300';
const imgClass = 'w-full h-full object-cover hover:opacity-30 ease-in duration-300';

const AboutUs = () => {
  const navigate = useNavigate();

  const goToAboutSection = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile screen size, go to Section 1
      navigate("/support#donate");
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet screen size, go to Section 2
      navigate("/support#donate1");
    } else {
      // Desktop screen size, go to Section 3
      navigate("/support#donate1");
    }
  };

  return (
    <div id="aboutUs">
      <div className="flex items-center justify-center bg-[#0b8b68] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-6xl md:text-7xl text-white">About Us</h3>
      </div>

      <div className="flex items-center justify-center  py-8 md:py-20 px-6">
        <p className="max-w-[1000px] text-center p__text">Inclusive Growth and Prosperity Initiative is dedicated to feeding children, empowering women, training farmers, responding to disasters, and serving communities in need. We are committed to providing health education and facilities, promoting cross-cultural heritage, taking vulnerable children and youths off the street, and offering skills development programs. This is a space to share our journey, the impact of our services, and what sets us apart in our mission to create inclusive growth and prosperity.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:max-h-[680px]">
        <div className="flex flex-col md:flex-row lg:basis-7/12 gap-6">
          <div className="flex flex-col md:basis-3/6 lg:basis-7/12 gap-6">
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="w-full h-full md:basis-3/6 relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgThree} alt="education" loading="lazy"/></div>
              <div className="w-full h-full md:basis-3/6 relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgEight} alt="education" loading="lazy"/></div>
            </div>
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoThree} alt="learning" loading="lazy"/></div>
          </div>

          <div className="flex flex-col md:basis-3/6 lg:basis-5/12 gap-6">
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoFour} alt="development" loading="lazy"/></div>
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoNine} alt="catering" loading="lazy"/></div>
          </div>
        </div>

        <div className="w-full lg:basis-5/12">
          <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgFour} alt="development" loading="lazy"/></div>
        </div>
      </div>

      <div className="app__flex py-12 px-5 bg-[#fcbe27]">
        <AnimatedSection id="quote2">
          <div className="text-center text-white w-[100%] max-w-[860px]">
            <h3 className="text-2xl md:text-3xl italic">We believe in the potential of every individual to thrive, irrespective of their circumstances. Through our initiatives, we strive to create opportunities for growth, empowerment, and positive change.</h3>
          </div>
        </AnimatedSection>
      </div>

      <div className="flex justify-center items-center flex-col w-full">
        {aboutData.map((item, index) => (
          <Mission title={item.title} text={item.text} imgUrl={item.imgUrl} className={item.className} id={item.id} key={item.title + index} />
        ))}
      </div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#0b8b68]">
        <AnimatedSection id="about2">
          <div className="app__flex flex-col text-white gap-6">
            <h4 className="font-bold p__text text-4xl md:text-5xl text-center">Support Our Cause Today!</h4>
            <button onClick={goToAboutSection} className="border-4 text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">GIVE NOW</button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default AboutUs
