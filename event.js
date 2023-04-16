import React from 'react';
//import EventImg from './EventImg';
import imgThumbnail from '../img/dollar.jpeg';
import imgLogo from '../img/msu_logo_temp.jpeg';
import { useNavigate } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";



function Event(prop) {
  const navigate = useNavigate();
  const thumbnailClick = () => navigate('/selected')

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
    <motion.div variants={container} animate='visible' initial='hidden' className='event-c bg-black'>
        <motion.img variants={item} onClick={thumbnailClick} className='rounded-md m-2 hover:cursor-pointer' src={imgThumbnail} alt=''>
        </motion.img>
        <div className='eventDetails-c'>
          <motion.div variants={item} className='event-title'>
            <h3 className='text-sm text-white'>{prop.name}</h3>
          </motion.div>
          
        </div>
    </motion.div>
  )
}

export default Event;