import React from 'react';
import ProfileCard from '../Components/ProfileCard';

const Team = () => {

  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-4xl md:text-6xl font-bold pt-8">Our Team</h2>
      <div className='flex flex-col mx-12 items-center'>
        <h2 className='text-2xl md:text-4xl font-bold py-8'>Head</h2>
        <ProfileCard
          title="Aadil Salim"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Overall Head"
          ImagePath='https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077009/Aadil_nt49ao.jpg'
        />
      </div>

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Managers</h2>
      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Samyak Joshi"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Events, Inventory and Finance Manager"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077013/Samyak_n5reww.jpg"
        />
        <ProfileCard
          title="Rahul Aryan"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design, PR and Outreach Manager"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077012/RahulAryan_oyf1l2.jpg"
        />
        <ProfileCard
          title="Arpit Paida"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Manager"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077010/Arpit_cxmolt.jpg"
        />
      </div>

      <h2 className='md:text-4xl text-2xl font-bold py-8'>Coordinators</h2>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Varun Nadimpalli"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077014/VarunNadimpalli_rig0j2.jpg"
        />
        <ProfileCard
          title="Jarpula Bhanu Prasad"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077012/JarpulaBhanuPrasad_oogtne.jpg"
        />
        <ProfileCard
          title="Abhay Kumar"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077009/AbhayGupta_bw1qxd.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Pranadipan Sahoo"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Technical, Finance, Inventory Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077014/Pranadeepan_juk1vw.png"
        />
        <ProfileCard
          title="Jagadeep Borra"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077011/Jagadeep_w1p6qm.jpg"
        />
        <ProfileCard
          title="Rishi Cheekatla"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677392457/Rishi_Cheekatla_ozwp3v.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Titeeksha Godambe"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077013/TiteekshaGodambe_lv3tjb.jpg"
        />
        <ProfileCard
          title="Mallina Poojitha Sai"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077012/PoojithaMallina_dkiltr.jpg"
        />
        <ProfileCard
          title="Sai Geetha Bhavana"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Event Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077012/GeethaBhavana_xnqi51.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Anand Mathapathi"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077010/AnandMathapati_anr2iz.jpg"
        />
        <ProfileCard
          title="Paruchuri SriRam"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077013/SriRamParuchuri_hcmsl7.jpg"
        />
        <ProfileCard
          title="Pritesh Singh"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Inventory and finance Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077012/PriteshSingh_yo2owg.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Arsh Arora"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077010/ArshArora_mhqhwk.jpg"
        />
        <ProfileCard
          title="Aditya Gupta"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077010/AdityaGupta_xo8job.jpg"
        />
        <ProfileCard
          title="Devansh Agrawal"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077011/DevanshAgrawalpicture_c80a2s.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Manoj Kumar Reddy"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="PR and outreach Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077011/BapatuManojKumarReddy_bxfhi9.jpg"
        />
        <ProfileCard
          title="Arin Kulkarni"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077010/ArinKulkarni_rezcjt.jpg"
        />
        <ProfileCard
          title="Banavath Vishnu"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077011/BanavathVishnu_thrkhd.jpg"
        />
      </div>

      <div className='flex flex-col items-center max-w-[1240px] lg:flex-row mx-12'>
        <ProfileCard
          title="Tanish Samikommu"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          Domain="Design Coordinator"
          ImagePath="https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077013/TanishReddy__ggyo8e.jpg"
        />
      </div>

    </div>
  )
};



export default Team;
