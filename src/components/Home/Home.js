import React from "react";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonials/Testimonial";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Testimonial />
    </motion.div>
  );
};

export default Home;
