import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = () => {
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <h1 className="hero-heading"> Tinkrers' &nbsp; Laboratory</h1>

                {/* here add the what we do section */}
            <Button className="btn hireme-btn">
                <NavLink to="/contacts">Reach Us</NavLink>
            </Button>
            </div>
            <div className="section-hero-image">
                <picture>
                    <img src="./Images/Tinkrers.jpg" alt="tinkrers-image" className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
  )
};


const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 3.4rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
