import { NavLink } from 'react-router-dom';
import Logo from '../Images/Logo.svg'

const HeroSection = () => {
  return (
    <div>
        <div className="flex justify-between mx-auto max-w-[1240px] items-center pt-16">
            <div className="section-hero-data">
                <h1 className="md:text-6xl sm:text-4xl text-6xl font-bold p-2 "> Tinkerers' Laboratory</h1>

                <p>Think. Tinker. Transform</p>

            </div>
            <div className="section-hero-image">
                <picture>
                    <img className='w-[300px] mx-auto my-4' src="{Logo}" alt="tinkrers-image" />
                </picture>
            </div>
        </div>

    </div>
  )
};




export default HeroSection;
