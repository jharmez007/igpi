import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";

import { AnimatedSection, DonationForm } from '../../components';
import './donate.scss';

const Donate = () => {
  return (
    <div className="flex flex-col md:flex-row p__text">
      <div className="app__flex bg-[#ffb700] w-full md:basis-1/2 px-8 py-14 md:py-20 lg:p-32 text-white">
        <div className="app__flex flex-col gap-16 md:gap-24">
          <div className="app__flex flex-col gap-3 text-center">
            <div>{React.cloneElement(<IoPersonOutline />, { className: "fill-white stroke-white stroke-3 w-[28px] h-[28px] md:w-[35px] md:h-[35px]" })}</div>
            <AnimatedSection id="inPerson">
              <h4 className="text-3xl md:text-4xl font-extrabold">In-Person Donations</h4>
              <p>Visit Us</p>
            </AnimatedSection>
          </div>
          <div className="app__flex flex-col gap-3 text-center">
            <div>{React.cloneElement(<SlPhone />, { className: "fill-white stroke-white stroke-3 w-[28px] h-[28px] md:w-[35px] md:h-[35px]" })}</div>
            <AnimatedSection id="overPhone">
              <h4 className="text-2xl md:text-3xl font-extrabold">Donations Over the Phone</h4>
              <p className="max-w-[500px]">You can also make a difference offline by visiting our center at 15, Owhor Street Rumuomoi by psychiatric hospital road, Port Harcourt, or by contacting us at +234-814-683-8625 to make a donation over the phone.</p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div id="donate" className="flex justify-center bg-[#37e6b7] w-full md:basis-1/2 py-14 px-7">
        <div className="flex flex-col gap-8 max-w-[500px]">
          <AnimatedSection id="onlineDonor">
            <div className="flex flex-col gap-8">
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#2b3d38cc]">Donate Online</h4>
              <p className="text-[#2b3d38cc]">This is your campaign description. It’s a great place to tell visitors what this campaign is about, connect with your donors and draw attention to your cause.</p>
            </div>
          </AnimatedSection>
          <div>
            <DonationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
