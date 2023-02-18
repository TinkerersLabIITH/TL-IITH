import React from 'react';
import { FaDiscord, FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-purple-900 sm:text-md'>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300'>

                <div className=''>
                    <h1 className='w-full md:text-3xl  font-bold text-gray-100 pb-4'>Tinkerers Lab IITH</h1>
                    <div className='flex flex-row items-center'>
                        <FaMapMarkerAlt />
                        <h2 className='font-medium text-md md:text-xl text-gray-400 p-2'>Location</h2>
                    </div>
                    <p>Beside Aryabatta Hostel. Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India.</p>

                </div>
                <div className=''>
                    <div>
                        <h6 className='font-medium text-gray-400 text-xl'>Follow us</h6>
                        <div className='flex flex-row justify-between px-6 py-6 items-center'>
                            <div>
                                <a href="https://www.facebook.com/tl.iith/"><FaFacebook size={30} /></a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/tinkererslab_iith/"><FaInstagram size={30} /></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/tinkerers-lab-iith-1298a4190/?originalSubdomain=in"><FaLinkedin size={30} /></a>
                            </div>
                            <div>
                                <a href="https://discord.gg/CNMUAjFK"><FaDiscord size={30} /></a>
                            </div>
                            <div>
                                <a href="https://github.com/TinkerersLabIITH"><FaGithub size={30} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <h6 className='font-medium text-gray-400 text-xl'>Contact</h6>
                        <div className='flex flex-col justify-between py-6 '>
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <FaPhoneAlt className="mr-4 items-center" />
                                    </div><p>+91 70343 99330</p>
                                </div> <br />
                                <div className="flex flex-row items-center">
                                    <div>
                                        <a href="mailto:tl@iith.ac.in?body=My custom mail body"><FaEnvelope className="mr-4 items-center" /> </a>
                                    </div><p>tl@iith.ac.in</p>
                                </div> <br />
                                <div className="flex flex-row items-center">
                                    <div>
                                        <a href="mailto:me19btech11044@iith.ac.in?body=My custom mail body"><FaEnvelope className="mr-4 items-center" /> </a>
                                    </div><p>me19btech11044@iith.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-gray-100 text-center font-bold flex-col items-center pb-4'>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved | IIT Hyderabad
            </div>
        </div>
    );
};

export default Footer;