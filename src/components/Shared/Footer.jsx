import React from "react";
import envelop_icon from "../../assets/fi_envelop.png";
import facebook_icon from "../../assets/fi_facebook.png";
import linkedin_icon from "../../assets/fi_linkedin.png";
import globe_icon from "../../assets/fi_globe.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <div className="">
            <div className="text-sm sm:text-base font-bold">
              <div className="flex justify-start gap-4">
                <img className="h-6 w-6" src={logo} alt="HERO.IO Logo" />
                <div> HERO.IO: </div>
              </div>
              Cloud platform simplifying app development, deployment, and team
              collaboration.
            </div>
          </div>

          <div>
            <h1 className="text-white font-bold mb-2">Company</h1>
            <div className="flex flex-col gap-1">
              <a className="link link-hover text-sm sm:text-base">About Us</a>
              <a className="link link-hover text-sm sm:text-base">
                Our Mission
              </a>
              <a className="link link-hover text-sm sm:text-base">
                Contact Sales 
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-white font-bold mb-2">Services</h1>
            <div className="flex flex-col gap-1">
              <a className="link link-hover text-sm sm:text-base">
                Products & Services
              </a>
              <a className="link link-hover text-sm sm:text-base">
                Customer Stories
              </a>
              <a className="link link-hover text-sm sm:text-base">
                Download Apps
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-white font-bold mb-2">Information</h1>
            <div className="flex flex-col gap-1">
              <a className="link link-hover text-sm sm:text-base">
                Privacy Policy
              </a>
              <a className="link link-hover text-sm sm:text-base">
                Terms & Conditions
              </a>
              <a className="link link-hover text-sm sm:text-base">Join Us</a>
            </div>
          </div>

          <div>
            <h1 className="text-white font-bold mb-2">Social Links</h1>
            <div className="flex gap-3">
              <img className="h-6 w-6" src={globe_icon} alt="Website" />
              <img className="h-6 w-6" src={linkedin_icon} alt="LinkedIn" />
              <img className="h-6 w-6" src={facebook_icon} alt="Facebook" />
              <img className="h-6 w-6" src={envelop_icon} alt="Email" />
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm sm:text-base text-gray-400">
          Copyright © 2025 - All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
