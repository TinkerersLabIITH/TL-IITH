import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../Images/LogoCopy.svg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const HeroSection = () => {

  const slides = [
    { url: 'https://res.cloudinary.com/dtmgysc9y/image/upload/v1677076964/TinkeringNight_vnz9cb.jpg', },
    { url: 'https://res.cloudinary.com/dtmgysc9y/image/upload/v1677076964/Tinkering-101_exxe0o.jpg', },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      {/* This is the header section */}
      <header className='max-w-[1240px]flex flex-row items-center pb-12 bg-purple-50'>

        <div className="flex justify-between mx-auto max-w-[1240px] items-center pt-16">
          <div className="section-hero-data">
            <h1 className="md:text-7xl text-6xl font-bold p-2 "> Tinkerers' Laboratory</h1>
            <p className='font-semibold px-4 pb-4 text-gray-600 text-xl md:text-2xl'>Think. Tinker. Transform</p>
            <NavLink className="border-4 border-purple-400 px-4 py-2 ml-4 rounded-full text-white font-bold text-xl bg-purple-900" to="/contacts">Reach us</NavLink>
          </div>

          <div className="section-hero-image">
            <picture>
              <img className='w-40% mx-auto my-4' src={Logo} alt="tinkrers-image" />
            </picture>
          </div>
        </div>
      </header>

      <div className="p-8 flex flex-col items-center ">
        <h2 className='text-2xl md:text-4xl pb-8 px-6 font-bold'>Our Aim</h2>
        <hr className='w-2/5  border-purple-400 py-4' />
        <p className='align-center font-semibold px-6'>Here, at Tinkerers' Lab, our aim is to provide you a working space with <br />vast ranges of tools in order to bring out the inner tinkerer in you</p>

        <div className='flex flex-col items-center max-w-[1240px] lg:flex-row  mx-12'>
          <div className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 m-8 from-[#D8B4FE] to-[#818CF8] lg:h-[300px]'>
            <div className="flex flex-col  h-full bg-white rounded-lg p-4 items-center">
              <p className='font-bold text-3xl px-6 py-4 mb-8'>Always Available</p>
              <p className='font-bold  color text-gray-500 '>We know that the best ideas don't always come to us during work hours. Tinkerers' Lab is open 24/7, giving you the liberty to build and innovate whenever.</p>
            </div>
          </div>


          <div className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 m-8 from-[#D8B4FE] to-[#818CF8] lg:h-[300px]'>
            <div className="flex flex-col  h-full bg-white rounded-lg p-4 items-center">
              <p className='font-bold text-3xl px-6 py-4 mb-8'>Resources</p>
              <p className='font-bold  color text-gray-500'>We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers. </p>
            </div>
          </div>

          <div className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 m-8 from-[#D8B4FE] to-[#818CF8] lg:h-[300px]'>
            <div className="flex flex-col  h-full bg-white rounded-lg p-4 items-center">
              <p className='font-bold text-3xl px-6 py-4 mb-8'>TL Talks</p>
              <p className='font-bold  color text-gray-500'>TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries.</p>
            </div>
          </div>
        </div>

      </div>


      {/* This section is for machines in laboratory */}
      {/* <section>
        <div className="container categories_container">
          <div className="categories_left">
            <h2>Machines</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium accusantium harum quidem ad placeat, exercitationem unde non labore pariatur animi quo ipsum quaerat? Iure obcaecati reiciendis amet odit ex impedit, quae dolorem asperiores, commodi at incidunt, autem error voluptatem!</p>
            <NavLink className="anchor btn btn-primary" to="/inventory">Want to use</NavLink>
          </div>
          <div className="categories_right">
            <article className="catagory">
              <span className="catogoty_icon">
                <img src="./Images/machine1.jpeg" alt="machine1" />
              </span>
              <h5>Machine-1</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, qui.</p>
            </article>
            <article className="catagory">
              <span className="catogoty_icon">
                <img src="./Images/machine2.jpeg" alt="machine2" />
              </span>
              <h5>Machine-2</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, qui.</p>
            </article>
            <article className="catagory">
              <span className="catogoty_icon">
                <img src="./Images/machine3.jpeg" alt="machine3" />
              </span>
              <h5>Machine-3</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, qui.</p>
            </article>
          </div>
        </div>
      </section> */}

      {/* This is the section for Events */}
      {/* <section>
        <h2>Events</h2>
        <div className="container event_container">
          <article className="event">
            <div className="event_image">
              `<img src="../public/Images/Logo.png" alt="Event-1" />`
            </div>
            <div className="event_info">
              <h4>Event - 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni quibusdam deserunt omnis officiis similique quisquam quos cupiditate quis totam.</p>
              <NavLink className="anchor btn btn-primary" to='/events'>Know more</NavLink>
            </div>
          </article>
          <article className="event">
            <div className="event_image">
              <img src="../public/Images/Logo.png" alt="Event-2" />
            </div>
            <div className="event_info">
              <h4>Event - 2</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni quibusdam deserunt omnis officiis similique quisquam quos cupiditate quis totam.</p>
              <NavLink className="anchor btn btn-primary" to='/events'>Know more</NavLink>
            </div>
          </article>
          <article className="event">
            <div className="event_image">
              <img src="../public/Images/Logo.png" alt="Event-2" />
            </div>
            <div className="event_info">
              <h4>Event - 3</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni quibusdam deserunt omnis officiis similique quisquam quos cupiditate quis totam.</p>
              <NavLink className="anchor btn btn-primary" to='/events'>Know more</NavLink>
            </div>
          </article>

        </div>

      </section> */}

      <div className="p-8 flex flex-col items-center bg-purple-50">
        <h2 className='text-2xl md:text-4xl pb-2 px-6 font-bold'>Gallery</h2>

        <div className='max-w-[1400px] h-[780px] w-full m-auto py-12 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

      </div>



    </div>
  )
};




export default HeroSection;
