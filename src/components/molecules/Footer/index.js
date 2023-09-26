import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-green"
            href="https://www.fiverr.com/netftechnology?up_rollout=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl inline-block mx-6 text-red"
            href="https://www.upwork.com/freelancers/~01ef98c02265da3b6f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
      
         
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://github.com/Asiffreelance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
         
        
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <h5> Copyright {year.getFullYear()}  &copy; Developed by{" "} <a
              href="https://www.linkedin.com/in/asif-tufail-b294b4208/"
              className="text-primary hover:underline"
              target="blank"> Muhammad Asif</a>, All Rights Reserved </h5>
        
          

        
        </div>
      </footer>
    </>
  );
};

export default Footer;
