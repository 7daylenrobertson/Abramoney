import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../img/1.png';
import {motion, AnimatePresence} from "framer-motion";


export default function Landing() {
  // FRAMER MOTION
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }

  }
  return (
    <motion.div variants={container} animate='visible' initial='hidden' className='landing-c'>
        <motion.div variants={item} className='landing-logo-c'>
          <a href="/home"><img className='w-fit h-1/6 p-6 ' src={BrandLogo} alt="" /></a>
        </motion.div>
      
    </motion.div>
    
  )
}
