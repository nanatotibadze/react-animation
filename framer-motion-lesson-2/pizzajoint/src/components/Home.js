import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";


const containerVariants = {

  hidden: {

    opacity: 0
  },
  visbile: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const buttonVariants = {


  hover: {
    scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    }

  }
}

const Home = () => {
  return (
    <motion.div className="home container" variants={containerVariants} animate="visible" exit="exit">
      <motion.h2 animate={{}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover" >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div >
  )
}

export default Home;