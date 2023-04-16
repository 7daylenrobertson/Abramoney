import React from 'react';
import TopicSearchBar from '../bars/TopicSearchBar';
import Event from "../event/event";
import { useNavigate } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";



export default function Live_events() {
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/home");

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
    <div className='live-events-c bg-white'>
        <TopicSearchBar/>
        <div onClick={handleBackClick} className='deselect-option hover:cursor-pointer'>←</div>

        <motion.div variants={container} animate="visible" initial='hidden' className='live-events-list-c'>
            <div className='live-event'>
                <Event name="Forex"/>
                <Event name="Bonds"/>
                <Event name="Index Funds"/>
                <Event name="Crypto"/>
                <Event name="NASDAQ"/>
                <Event name="World News"/>

            </div>
        </motion.div>
    </div>
  )
}
