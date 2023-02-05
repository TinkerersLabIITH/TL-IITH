import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer>



        <div className="footer container grid grid-three-column">
          <div className="footer-about">
            <div>
              <div className="footer-social">
                <div className="footer-social--icons">
                  <div>
                    <a href="https://goo.gl/maps/Ffbim5pzKheez5948"><FaMapMarkerAlt className="icons" /> </a>
                  </div>
                  <h3>Location</h3>
                </div>
                <p>Beside Aryabatta Hostel. Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India.</p>
              </div>
            </div>
          </div>




          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.facebook.com/tl.iith/"><FaFacebook className="icons" /></a>
              </div>
              <div>
                <a href="https://www.instagram.com/tinkererslab_iith/"><FaInstagram className="icons" /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/tinkerers-lab-iith-1298a4190/?originalSubdomain=in"><FaLinkedin className="icons" /></a>
              </div>
              <div>
                <a href="https://discord.gg/CNMUAjFK"><FaDiscord className="icons" /></a>
              </div>
              <div>
                <a href="https://github.com/TinkerersLabIITH"><FaGithub className="icons" /></a>
              </div>
            </div>
          </div>


          <div className="footer-contact">
            <h3>Contact's</h3>
            <div className="footer-social">
              <div className="footer-social--icons">
                <div>
                  <FaPhoneAlt className="icons" />
                </div><p>+91 70343 99330</p>
              </div> <br />
              <div className="footer-social--icons">
                <div>
                  <a href="mailto:tl@iith.ac.in?body=My custom mail body"><FaEnvelope className="icons" /> </a>
                </div><p>tl@iith.ac.in</p>
              </div> <br />
              <div className="footer-social--icons">
                <div>
                  <a href="mailto:me19btech11044@iith.ac.in?body=My custom mail body"><FaEnvelope className="icons" /> </a>
                </div><p>me19btech11044@iith.ac.in</p>
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
