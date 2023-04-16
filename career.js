import React from 'react'
import {motion, AnimatePresence} from "framer-motion";

export default function Career() {
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
                <div className='tips w-20 rounded-full p-3  bg-gray-400 hover:bg-[#ad112b] hover:text-white'>?</div>
                <motion.div variants={container} animate="visible" initial="hidden" className='balance text-xl p-3 font-bold '> <b className='text-black px-2'>Career</b></motion.div>
                <div className='budget-settings w-20 p-3 rounded-full bg-gray-400 hover:bg-[#ad112b] hover:text-white'> ⚙</div>
            </div>
       
            <motion.div variants={item} className='row3 mt-20 flex justify-around'>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                    <b >Roth IRA</b>
                    <ul>
                        <motion.li variants={item}><b>A Roth IRA (Individual Retirement Account) is a type of investment account that allows for tax-free growth and withdrawals after retirement.</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >Insurance</b>
                    <ul>
                        <motion.li variants={item}><b>Insurance is a method of safeguarding oneself or one's assets from financial loss. It offers you the assurance that if something were to go wrong, you would be protected.</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >Mutual Funds</b>
                    <ul>
                        <motion.li variants={item}><b className='txt-sm'> Mutual funds are an essential investing tool for all sorts of individuals. Mutual funds are handled by experienced fund managers who are experts in the selection and management of securities, allowing for less anxiety.</b></motion.li>
                        
                    </ul>
                </motion.div>
                
            </motion.div>
            
            <div className='row2 flex justify-center'>
                <motion.div variants={container} animate="visible" initial="hidden" className='task-bar'>
                    <ul>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💰</div>
                            <div className='task-info'>What exactly is a Roth IRA? </div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[85%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 85%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💳</div>
                            <div className='task-info'>Who manages mutual funds?</div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="w-[45%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'> 📖</div>
                            <div className='task-info'>How does insurance protect against financial loss?</div>
                            <div className='progress-bar'>

                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[62%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 62%</div>
                                </div>

                            </div>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
