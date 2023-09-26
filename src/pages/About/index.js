import React from "react";
import { TypeAnimation } from 'react-type-animation';


import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1Su9GKInJv2MQmva50DN1NL6hm5ebjA9N


              "
              alt="Muhammad Asif" width="600px"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Muhammad Asif"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Muhammad Asif</h1>
             <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A MERN STACK DEVELOPER",
                  2000,
                  "A WORDPRESS DEVELOPER",
                  2000,
                  "A Shopify DEVELOPER",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As an experienced MERN stack developer, my commitment revolves around crafting top-tier web applications
             tailored to meet my clients' needs. With years of hands-on experience in full-stack web development,
              I specialize in leveraging the power of React.js, Node.js, MongoDB, Express.js,  and WordPressto 
              engineer web applications that not only meet high-quality standards but are also 
              known for their scalability and robustness.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            My passion for unraveling complex challenges and pioneering innovative solutions fuels my drive
             to remain constantly updated with the latest industry technologies and trends.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            <strong><b><font color="#FF621A">Journey:  </font></b></strong><br></br>
My journey into the world of web development began with a curiosity to create, tinker, and innovate. Three years ago, I embarked on a path of skill development, diving deep into the MERN stack, which has since become my forte.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
          

          
          </motion.div>
          
        </div>
        
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
    
  );
  
};

export default About;
