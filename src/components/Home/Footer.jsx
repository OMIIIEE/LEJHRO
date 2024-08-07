import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer bg-cover bg-center flex flex-col items-center justify-center">
      <div className='bg-[#2C7FBF] h-4 w-full'></div>
      <div className="container sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 text-white flex justify-center lg:pl-48 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-list col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              <div>
                <p className="footer-list-title text-xl md:text-2xl lg:text-3xl mb-4 text-black">Company</p>
                <ul> 
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Innovations</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Business services</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Financial services</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Recruiter</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">About</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Blogs</a></li>
                </ul>
              </div>
              <div>
                <p className="footer-list-title text-xl md:text-2xl lg:text-3xl mb-4 text-black">Programs</p>
                <ul>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Lejhro Bootcamp</a></li>
                 
                </ul>
              </div>
              <div>
                <p className="footer-list-title text-xl md:text-2xl lg:text-3xl mb-4 text-black">Support</p>
                <ul>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Contact</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Term Of Use</a></li>
                  <li><a href="#" className="footer-link text-sm md:text-base lg:text-lg text-gray-800">Privacy Statement</a></li>
                  
                </ul>
              </div>
              <div>
                <p className="footer-list-title text-xl md:text-2xl lg:text-3xl mb-4 text-black">Connect With Us</p>
                <ul className="social-list flex flex-wrap gap-4 text-xl md:text-2xl lg:text-3xl">
                  <li className="hover:scale-125 transition-transform duration-300 text-gray-800"><a href="#" className="social-link"><FaFacebook /></a></li>
                  <li className="hover:scale-125 transition-transform duration-300 text-gray-800"><a href="#" className="social-link"><FaTwitter /></a></li>
                  <li className="hover:scale-125 transition-transform duration-300 text-gray-800"><a href="#" className="social-link"><FaInstagram /></a></li>
                  <li className="hover:scale-125 transition-transform duration-300 text-gray-800"><a href="#" className="social-link"><FaLinkedin /></a></li>
                  <li className="hover:scale-125 transition-transform duration-300 text-gray-800"><a href="#" className="social-link"><FaGoogle /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center mt-8 text-white mb-8">
        <p className="copyright mb-4 md:mb-0 text-gray-600 text-xl">&copy; 2024 LEJHRO. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
