import React from 'react';

const Contacts = () => {
  return (
    <section>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.6943808217662!2d78.12595730481738!3d17.597506248235728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675543870376!5m2!1sen!2sin" width="90%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyakrln"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message from TL-Website"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contacts;
