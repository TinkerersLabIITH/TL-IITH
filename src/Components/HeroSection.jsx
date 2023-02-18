import { NavLink } from 'react-router-dom';
import Logo from '../Images/LogoCopy.svg'

const HeroSection = () => {
  return (
    <div>
        {/* This is the header section */}
        <header>

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
        </header>

        {/* This section is for machines in laboratory */}
        <section>
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
        </section>

        {/* This is the section for Events */}
        <section>
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
      
    </section>

    </div>
  )
};




export default HeroSection;
