import { NavLink } from 'react-router-dom';
import Logo from '../Images/LogoCopy.svg'

const HeroSection = () => {
  return (
    <div>
        <div className="flex justify-between mx-auto max-w-[1240px] items-center pt-16">
            <div className="section-hero-data">
                <h1 className="md:text-6xl sm:text-4xl text-6xl font-bold p-2 "> Tinkerers' Laboratory</h1>

                <p>Think. Tinker. Transform</p>
                <div className="container header_container">
        <div className="header_left">
            <h2>What we do?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, commodi ab. Molestiae accusamus iure quas! Possimus alias voluptas at esse harum sed officiis ipsa voluptates earum accusamus velit, repellat quos consequuntur suscipit iusto eum sapiente facere voluptate iure neque minus!</p>
            <NavLink className="anchor btn btn-primary" to="/contacts">Reach us</NavLink>
        </div>
      </div>

            </div>
            <div className="section-hero-image">
                <picture>
                    <img className='w-[300px] mx-auto my-4' src={Logo} alt="tinkrers-image" />
                </picture>
            </div>
        </div>

    </div>
  )
};




export default HeroSection;
