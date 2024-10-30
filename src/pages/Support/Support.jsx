import React from 'react';

import { AnimatedSection, Donate } from '../../components';
import { images } from '../../constants';
import './support.scss';

const Support = () => {
  return (
    <div id="support">
      <div className="flex items-center justify-center bg-[#0b8b68] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-5xl md:text-6xl lg:text-7xl text-white text-center max-w-[600px]">Join Us in Creating a Better Tomorrow</h3>
      </div>

      <div className="app__flex">
        <div className="flex items-center justify-center  py-8 md:py-20 px-6">
          <div className="app__flex flex-col gap-6">
            <h4 className="font-bold p__text text-3xl md:text-4xl text-center text-[#0b8b68] max-w-[300px]">Take Action for Inclusive Growth</h4>
            <p className="max-w-[1000px] text-center p__text">Inclusive Growth and Prosperity Initiative is dedicated to feeding children, empowering women, training farmers, responding to disasters, and serving communities in need. We are committed to providing health education and facilities, promoting cross-cultural heritage, taking vulnerable children and youths off the street, and offering skills development programs. This is a space to share our journey, the impact of our services, and what sets us apart in our mission to create inclusive growth and prosperity.</p>
          </div>
        </div>
      </div>

      <div className="max max-h-[500px] md:h-[500px]">
        <img className="w-full h-full object-cover object-top" src={images.photoEleven} alt="img" loading="lazy" />
      </div>

      <div id="donate1" className="app__flex px-6 py-8 md:py-20">
        <AnimatedSection id="supportSection">
          <div className="app__flex flex-col gap-3 md:gap-6">
            <h4 className="font-bold p__text text-4xl md:text-5xl text-center text-[#0b8b68]">Ways to Support Our Cause</h4>
            <p className="text-center p__text">Make a Contribution</p>
          </div>
        </AnimatedSection>
      </div>

      <div>
        <Donate />
      </div>
    </div>
  )
}

export default Support 
