import React from 'react';
import ProfileCard from '../Components/ProfileCard';

const Team = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="md:text-6xl text-3xl font-bold pt-8">Our Team</h2>

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Head</h2>
      {/* <div className="container grid grid-one-column">

        <div className="card">
          <figure>
            <img src="src/Images/Team/Aadil.jpeg" alt="Aadil" />
          </figure>
          <div className="card-data">
            <h3>Aadil Salim</h3>
            <p>Overall Head</p>
          </div>
        </div>
        

      </div> */}
      <ProfileCard
        title="Rahul Aryan"
        gradient="from-[#D8B4FE] to-[#818CF8]"
        Domain="Overall Head"
        ImagePath="src/Images/Team/RahulAryan.jpg"
      />

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Managers</h2>
      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row '>
      <ProfileCard
        title="Samyak Joshi"
        gradient="from-[#D8B4FE] to-[#818CF8]"
        Domain="Overall Head"
        ImagePath="src/Images/Team/Samyak.jpg"
      />
      <ProfileCard
        title="Rahul Aryan"
        gradient="from-[#D8B4FE] to-[#818CF8]"
        Domain="Overall Head"
        ImagePath="src/Images/Team/RahulAryan.jpg"
      />
      <ProfileCard
        title="Rahul Aryan"
        gradient="from-[#D8B4FE] to-[#818CF8]"
        Domain="Overall Head"
        ImagePath="src/Images/Team/RahulAryan.jpg"
      />
      </div>
      

      {/* <div className="container grid grid-three-column">

        <div className="card">
          <figure>
            <img src="src/Images/Team/Samyak.jpg" alt="Samyak" />
          </figure>
          <div className="card-data">
            <h3>Samyak Joshi</h3>
            <p>Events, Inventory and Finance</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/RahulAryan.jpg" alt="Rahul" />
          </figure>
          <div className="card-data">
            <h3>Rahul Aryan</h3>
            <p>Design, PR and Outreach</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/Arpit.jpeg" alt="Arpit" />
          </figure>
          <div className="card-data">
            <h3>Arpit Paida</h3>
            <p>Technical Manager</p>
          </div>
        </div>

      </div> */}


      <h2 className='title'>Coordinators</h2>

      <div className="container grid grid-four-column">

        <div className="card">
          <figure>
            <img src="src/Images/Team/VarunNadimpalli.jpg" alt="varun" />
          </figure>
          <div className="card-data">
            <h3>Varun Nadimpalli</h3>
            <p>Technical Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/JarpulaBhanuPrasad.jpg" alt="Bhanu" />
          </figure>
          <div className="card-data">
            <h3>Jarpula Bhanu Prasad</h3>
            <p>Technical Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/AbhayGupta.jpg" alt="Abhay" />
          </figure>
          <div className="card-data">
            <h3>Abhay Kumar</h3>
            <p>Technical Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/" alt="Bhanu" />
          </figure>
          <div className="card-data">
            <h3>Pranadipan Sahoo</h3>
            <p>Technical , Inventory <br /> and finance Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/Jagadeep.jpg" alt="jagadeep" />
          </figure>
          <div className="card-data">
            <h3>Jagadeep Borra</h3>
            <p>Event Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/some.img" alt="Bhanu" />
          </figure>
          <div className="card-data">
            <h3>Rishi Cheekatla</h3>
            <p>Event Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/TiteekshaGodambe .jpg" alt="Titeeksha" />
          </figure>
          <div className="card-data">
            <h3>Titeeksha Godambe</h3>
            <p>Event Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/PoojithaMallina.jpg" alt="Poojitha" />
          </figure>
          <div className="card-data">
            <h3>Mallina Poojitha Sai </h3>
            <p>Event Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Images/some.img" alt="Bhanu" />
          </figure>
          <div className="card-data">
            <h3>Sai Geetha Bhavana</h3>
            <p>Event Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/AnandMathapati.jpg" alt="Anand" />
          </figure>
          <div className="card-data">
            <h3>Anand Mathapathi</h3>
            <p>Inventory and finance Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/SriRamParuchuri.jpg" alt="Sriram" />
          </figure>
          <div className="card-data">
            <h3>Paruchuri SriRam</h3>
            <p>Inventory and finance Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/PriteshSingh.jpg" alt="Pritesh" />
          </figure>
          <div className="card-data">
            <h3>Pritesh Singh</h3>
            <p>Inventory and finance Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/ArshArora.jpg" alt="Arsh" />
          </figure>
          <div className="card-data">
            <h3>Arsh Arora</h3>
            <p>PR and outreach Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/AdityaGupta.jpg" alt="Aditya" />
          </figure>
          <div className="card-data">
            <h3>Aditya Gupta</h3>
            <p>PR and outreach Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/BapatuManojKumarReddy.jpg" alt="Manoj" />
          </figure>
          <div className="card-data">
            <h3>Manoj Kumar Reddy</h3>
            <p>PR and outreach Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/DevanshAgrawalpicture.jpg" alt="Devansh" />
          </figure>
          <div className="card-data">
            <h3>Devansh Agrawal</h3>
            <p>PR and outreach Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/ArinKulkarni.jpg" alt="Arin" />
          </figure>
          <div className="card-data">
            <h3>Arin Kulkarni</h3>
            <p>Design Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/BanavathVishnu.jpg" alt="vishnu" />
          </figure>
          <div className="card-data">
            <h3>Banavath Vishnu</h3>
            <p>Design Coordinator</p>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="src/Images/Team/TanishReddy_.jpg" alt="Tanish" />
          </figure>
          <div className="card-data">
            <h3>Tanish Samikommu</h3>
            <p>Design Coordinator</p>
          </div>
        </div>

      </div>

    </div>
  )
};



export default Team;
