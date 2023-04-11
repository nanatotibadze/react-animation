import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0

  },

  visible:
  {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 2
    }

  }
}

const childVarients = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}





const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);

    }, 5000)

  })
  return (
    <motion.div className="container order" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 exit={{ opacity: 0 }}>Thank you for your order :)</motion.h2>
      <motion.p variants={childVarients} >You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div variants={childVarients} initial="hidden" animate="visible">
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;