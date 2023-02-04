import React from "react";
import styled from "styled-components";

const Contact = () => {

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.6943808217662!2d78.12595730481738!3d17.597506248235728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675543870376!5m2!1sen!2sin" width="90%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className="container">
        <div className="contact-form">
          <form
            action="replace the url"
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
justify-content: center;
align-items: center;

.container {
  margin-top: 6rem;
  text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        border-radius: 20px;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;