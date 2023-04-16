import React from 'react';
import { useNavigate } from "react-router-dom";
import imgLogo from '../img/msu_logo_temp.jpeg';
import imgThumbnail from '../img/dollar.jpeg';
import Modal from '../Modal';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";



export default function Selected_event() {
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/live");

  const [showModal, setShowModel] = useState(false);
  const handleOnClose = () => setShowModel();

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
    <motion.div variants={container} animate='visible' initial='hidden' className='selected-event-c bg-white'>
        <motion.div variants={item} onClick={handleBackClick} className='deselect-event hover:cursor-pointer'>←</motion.div>
        <Modal showModal={showModal} oncClose={handleOnClose} isvisible={showModal} />

        <motion.div variants={container} className='selected-event'>
            <motion.img variants={item} className='rounded-md hover:cursor-pointer' src={imgThumbnail} alt=''></motion.img>
            <div onClick={() => setShowModel(true)} className='selected-event-join bg-[#ad112b] hover:cursor-pointer'>QUIZ</div>
        </motion.div>
        <motion.div variants={container} className='selected-event-about'>
            <motion.div variants={item} className='selected-event-host'>
              <motion.img variants={item} className='selected-event-host-logo' src={imgLogo} alt="" />
              MSU
            </motion.div>

            <motion.div variants={container} className='selected-event-tags'>
              <motion.h3 variants={item} className='selected-event-tag bg-[#ad112b]'>Level 1</motion.h3>
              <motion.h3 variants={item} className='selected-event-tag'>Level 2</motion.h3>
              <motion.h3 variants={item} className='selected-event-tag'>Level 3</motion.h3>
              <motion.h3 variants={item} className='selected-event-tag'>Level 4</motion.h3>

            </motion.div>
        </motion.div>
        <motion.div variants={container} className='selected-event-details'>
          <motion.div variants={item} className='selected-event-title'>Financial Literacy 101 </motion.div>

          <h1>Description</h1>
          <motion.p variants={item} className='text-left ml-[12%] mt-2 p-3 mr-[15%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaer
          </motion.p>
        </motion.div>

    </motion.div>
  )
}
