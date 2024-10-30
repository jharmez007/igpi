import React, { useState } from 'react';

import { images } from '../../constants';
import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setErrorMessage('');

    // Validate fields
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // If validation passes, proceed to "send" form
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }, 1500); // Simulate sending the form (can be replaced by actual submission logic)
  };

  // const handleSubmit = () => {

  //   if (name === '' || email === '' || message === '') {
  //     alert('Please enter in your details!');
  //   }
  //   else {
  //     setLoading(true);

  //      const contact = {
  //        _type: 'contact',
  //        name: name,
  //        email: email,
  //        message: message,
  //      }

  //      client.create(contact)
  //        .then(() => {
  //          setLoading(false);
  //         setIsFormSubmitted(true);
  //      })
  //   }
  // }

  return (
    <div id="contact flex flex-col">
      <div className="flex items-center justify-center bg-[#0b8b68] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-6xl md:text-7xl text-white">Contact Us</h3>
      </div>

      <div className="app__flex flex-col-reverse lg:flex-row md:min-h-[90vh]">
        <div className="w-full h-full app__flex md:basis-1/2 p-8">
          <div className="app__flex flex-col gap-8 h-full">
            <h2 className="font-bold p__text text-4xl md:text-5xl text-center text-[#0b8b68]">Reach Out to Us</h2>
            <div className="app__flex flex-col gap-2">
              <p className="text-center p__text text-lg">15, Owhor Street Rumuomoi by psychiatric hospital road, Port Harcourt</p>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <p className="text-center p__text text-lg">Inclusivegrowth840@gmail.com</p>
                <div className="app__h-div hidden lg:block" />
                <p className="text-center p__text text-lg">+234-814-683-8625</p>
              </div>
            </div>

            <div className='w-full'>
              {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                  <div className="app__flex">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div className="app__flex">
                    <input
                      className="p-text"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={email}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="p-text"
                      placeholder="Your Message"
                      value={message}
                      name="message"
                      onChange={handleChangeInput}
                    />
                  </div>
                  {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                  <button
                    type="button"
                    className="bg-[#fcbe27] text-white mt-8 text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-[#fcc027ce] ease-in duration-300"
                    onClick={handleSubmit}
                  >
                    {loading ? 'Sending' : 'Send Message'}
                  </button>
                </div>
              ) : (
                <div className="app__flex mt-12">
                  <h3 className="p2__text text-5xl md:text-7xl text-center text-[#0b8b68]">Thank you for getting in touch!</h3>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-[90vh] app__flex md:basis-1/2">
          <img className="w-full h-full object-cover" src={images.imgSeven} alt="img" loading="lazy" />
        </div>
      </div>
       <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.773453721332!2d6.995760547916217!3d4.847570068263317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce0570f9e5df%3A0xb357b4a901744eaa!2s15%20Owhor%20Street%2C%20Rumuigbo%2C%20Port%20Harcourt%20500272%2C%20Rivers!5e0!3m2!1sen!2sng!4v1727481573002!5m2!1sen!2sng" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
       
      </div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#0b8b68]">
        <div className="app__flex flex-col text-white gap-6">
          <h4 className="font-bold p__text text-4xl md:text-5xl text-center">Join Us in Making a Difference Today!</h4>
          <button className="border-4 text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">GET INVOLVED</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
