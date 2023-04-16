import React from 'react';
import { Router, Routes, Route, Link } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";


export default function Home() {

  const options = ["upcoming", "live", "past"];
  let selected_option = 1;

  const optionSelect = (e) => {
    const selected = e.target.name;
    if (selected === 'upcoming'){
      selected_option = 0;
      console.log(selected_option)
    }
    else if (selected === 'live'){
      selected_option = 1;
      console.log(selected_option)

    }
    else if (selected === 'past'){
      selected_option = 2;
      console.log(selected_option)

    }
    else{
      console.log(selected);
    }

  }

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

    
    <motion.div variants={container} initial='hidden' animate='visible' className='home-c'>
      <motion.div variants={item} className='more-options'>
        <Link to={`/${options[selected_option]}`}>
          <button className='more-btn'>
            More...
          </button>
        </Link>
          
        </motion.div>
      <motion.div variants={container} animate='visible' initial='hidden' className='events-c'>
        
        <div className='left-event-slider'>
          <button className='slider-button'>←</button>
        </div>
        <motion.div variants={item} className='top-event-c bg-home-temp'>
          <div className='top-event-thumbnail'>Thumbnail IMG HERE</div>
          <div className='top-participants'>
            <div className='participants-number'>12k</div>
          </div>
        </motion.div>
        <div className='right-event-slider'>
          <button className='slider-button'>→</button>
        </div>

        <motion.div variants={container} animate='visible' initial='hidden' className='top-event-details'>
          <motion.div variants={item} className='top-event-host '>Morgan State</motion.div>
          <motion.div variants={item} className='top-event-title'>It's Time to End Injustice</motion.div>


        </motion.div>

      </motion.div>

      <div className='ulp-events-c'>
          <motion.button variants={item} onClick={optionSelect} name='upcoming' className='upcoming-events select-btn'>Upcoming</motion.button>
          <motion.button variants={item} onClick={optionSelect} name='live' className='live-events select-btn'>Live</motion.button>
          <motion.button variants={item} onClick={optionSelect} name='past' className='past-events select-btn'>Past</motion.button>


        </div>
        
    </motion.div>
  )
}
