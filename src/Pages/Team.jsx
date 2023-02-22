import React from 'react';
import ProfileCard from '../Components/ProfileCard';

const Team = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-6xl  font-bold pt-8">Our Team</h2>
      <div className='flex flex-col mx-12 items-center'>
        <h2 className='text-4xl font-bold py-8'>Head</h2>
        <ProfileCard
          title="Aadil Salim"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Overall Head"
          ImagePath="src/Images/Team/Aadil.jpeg"
        />
      </div>

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Managers</h2>
      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Samyak Joshi"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Events, Inventory and Finance"
          ImagePath="src/Images/Team/Samyak.jpg"
        />
        <ProfileCard
          title="Rahul Aryan"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design, PR and Outreach"
          ImagePath="src/Images/Team/RahulAryan.jpg"
        />
        <ProfileCard
          title="Arpit Paida"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Manager"
          ImagePath="src/Images/Team/Arpit.jpeg"
        />
      </div>

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Coordinators</h2>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Varun Nadimpalli"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="src/Images/Team/VarunNadimpalli.jpg"
        />
        <ProfileCard
          title="Jarpula Bhanu Prasad"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="src/Images/Team/JarpulaBhanuPrasad.jpg"
        />
        <ProfileCard
          title="Abhay Kumar"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="src/Images/Team/AbhayGupta.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Pranadipan Sahoo"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical, Finance, Inventory"
          ImagePath="src/Images/Team/Pranadeepan.png"
        />
        <ProfileCard
          title="Jagadeep Borra"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="src/Images/Team/Jagadeep.jpg"
        />
        <ProfileCard
          title="Rishi Cheekatla"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="src/Images/Team/AbhayGupta.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Titeeksha Godambe"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="src/Images/Team/TiteekshaGodambe .jpg"
        />
        <ProfileCard
          title="Mallina Poojitha Sai"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="src/Images/Team/PoojithaMallina.jpg"
        />
        <ProfileCard
          title="Sai Geetha Bhavana"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="src/Images/Team/GeethaBhavana.jpeg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Anand Mathapathi"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="src/Images/Team/AnandMathapati.jpg"
        />
        <ProfileCard
          title="Paruchuri SriRam"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="src/Images/Team/SriRamParuchuri.jpg"
        />
        <ProfileCard
          title="Pritesh Singh"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="src/Images/Team/PriteshSingh.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Arsh Arora"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="src/Images/Team/ArshArora.jpg"
        />
        <ProfileCard
          title="Aditya Gupta"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="src/Images/Team/AdityaGupta.jpg"
        />
        <ProfileCard
          title="Devansh Agrawal"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="src/Images/Team/DevanshAgrawalpicture.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Manoj Kumar Reddy"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="src/Images/Team/BapatuManojKumarReddy.jpg"
        />
        <ProfileCard
          title="Arin Kulkarni"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="src/Images/Team/ArinKulkarni.jpg"
        />
        <ProfileCard
          title="Banavath Vishnu"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="src/Images/Team/BanavathVishnu.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Tanish Samikommu"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="src/Images/Team/TanishReddy_.jpg"
        />
      </div>

    </div>
  )
};



export default Team;
