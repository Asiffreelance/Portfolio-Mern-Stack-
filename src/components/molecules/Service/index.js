import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";
import { FaReact, FaShopify, FaWordpress } from "react-icons/fa";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
  
    {
      id: 1,
      title: "MERN-Stack Development",
      icon: <FaReact />,
      description:
        "I possess extensive expertise in React.js, Node.js, Express.js, and MongoDB, enabling me to proficiently construct full-stack applications within the MERN stack architecture.",
    },
    
    {
      id: 3,
      title: "WordPress Development",
      icon: <FaWordpress />,
      description:
        " As an experienced WordPress Developer, my passion is dedicated to creating dynamic and visually captivating WordPress websites across various niches such as business, construction, real estate, architecture, and online stores, utilizing the power of WordPress and WooCommerce.",
    },
    {
      id: 5,
      title: "Shopify Development",
      icon: <FaShopify/>,
      description:
      "As an experienced Shopify Developer, my passion is dedicated to crafting dynamic and visually captivating Shopify websites and online stores.",
    },
  
    
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I do Offer</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
