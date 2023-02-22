import React from 'react';

const Contacts = () => {
  return (
    <div className='flex flex-col items-center pt-8'>
      <h2 className="md:text-4xl text-2xl font-bold py-8">Feel Free to Contact us</h2>

      
      <div className="flex flex-col items-center p-8 w-full ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.6943808217662!2d78.12595730481738!3d17.597506248235728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675543870376!5m2!1sen!2sin" width="90%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="border-4  rounded-md border-purple-600  p-8 m-4">
        <div className="contact-form ">
          <form
            action="https://formspree.io/f/xyyakrln"
            method="POST"container 
            className="contact-inputs flex flex-col px-8 ">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="off"
              required
              className='border-2 rounded p-2 mb-2 border-purple-400'
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className='border-2 rounded p-2 mb-2 border-purple-400'
            />

            <textarea
              name="Message from TL-Website"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              className='border-2 rounded p-2 mb-2 border-purple-400'
              required></textarea>

            <input type="submit" value="Send" className='border-2 px-4 py-2 bg-purple-600 text-gray-100 font-extrabold rounded'/>
          </form>
        </div>
      </div>

    </div>
  )
};

export default Contacts;
