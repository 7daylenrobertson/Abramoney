import React from 'react'
import {motion, AnimatePresence} from "framer-motion";

export default function Budget() {
    // FRAMER MOTION
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
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
    <div className='budget-c m-2 bg-gray-100 h-screen text-[#ad112b]'>
        <div  className='budget-content grid grid-row-6'>
            <div className='row1  mt-3 flex justify-around'>
                <div className='tips w-20 rounded-full p-3 txt-3xl font-bold  bg-gray-400 hover:bg-[#ad112b] hover:text-white'>?</div>
                <motion.div variants={container} animate="visible" initial="hidden" className='balance text-xl p-3 font-bold '> <b className='text-black px-2'>Balance:</b>$3,565,23</motion.div>
                <div className='budget-settings w-20 p-3 rounded-full bg-gray-400 hover:bg-[#ad112b] hover:text-white'> ⚙</div>
            </div>
            <div className='row2 flex justify-center'>
                <motion.div variants={container} animate="visible" initial="hidden" className='task-bar'>
                    <ul>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💰</div>
                            <div className='task-info'>Save $100</div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[85%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 85%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💳</div>
                            <div className='task-info'>Pay Off Credit Card Debt</div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="w-[45%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'> 📖</div>
                            <div className='task-info'>Save $300 For College</div>
                            <div className='progress-bar'>

                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[62%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 62%</div>
                                </div>

                            </div>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
            <motion.div variants={item} className='row3 mt-20 flex justify-around'>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                    <b >ESSENTIALS</b>
                    <ul>
                        <motion.li variants={item}><b>Car ------------- $50</b></motion.li>
                        <motion.li variants={item}><b>House ------------- $300</b></motion.li>
                        <motion.li variants={item}><b>Light ------------- $20</b></motion.li>
                        <motion.li variants={item}><b>Food ------------- $100</b></motion.li>
                        <motion.li variants={item}><b>Bills ------------- $300</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >SAVINGS</b>
                    <ul>
                        <motion.li variants={item}><b>Vacation ------------- $500</b></motion.li>
                        <motion.li variants={item}><b>Phone ------------- $300</b></motion.li>
                        <motion.li variants={item}><b>Laptop ------------- $2,000</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >SPENDING</b>
                    <ul>
                        <motion.li variants={item}><b>Shoes ------------- $120</b></motion.li>
                        <motion.li variants={item}><b>Fun ------------- $125</b></motion.li>
                        
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}
