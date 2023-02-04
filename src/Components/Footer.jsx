import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaGithub,FaFacebook,FaLinkedin,FaTwitter,FaMapMarkerAlt,FaEnvelope,FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
  <Wrapper>
    <footer>
        <div className="footer">
          <div className="footer-about">
            <div>
            <div className="footer-social">
              <div className="footer-social--icons">
              <div>
                <FaMapMarkerAlt className="icons" /> 
            </div>
              </div>
              </div>
            <p>Beside Aryabatta Hostel. Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India.</p>
              </div>
          </div>

      

     
            <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaLinkedin className="icons" />
              </div>
              <div>
                <FaTwitter className="icons" />
              </div>
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaGithub className="icons" />
              </div>
            </div>
          </div>


           <div className="footer-contact">
            <h3>Contact us</h3>
            <div className="footer-social">
              <div className="footer-social--icons">
              <div>
                <FaPhoneAlt className="icons" /> 
            </div><p>+91 12345 67890</p>
              </div>
              <div className="footer-social--icons">
              <div>
                <FaEnvelope className="icons" /> 
            </div><p>me19btech11044@iith.ac.in</p>
              </div>
              <div className="footer-social--icons">
              <div>
                <FaEnvelope className="icons" /> 
            </div><p>tl@iith.ac.in</p>
              </div>
            </div>
          </div>
          </div>

          <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-one-column">
            <p>
              @{new Date().getFullYear()} Tinkrers' Lab | IITH. All Rights Reserved
            </p>
          </div>
        </div>  
    </footer>
  </Wrapper>
  )
};

const Wrapper = styled.section`

footer {
    padding: 2rem 0 0rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 1rem;
      div {
        padding: 0.8rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
}
`;
export default Footer;
