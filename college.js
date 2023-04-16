import React from 'react'
import {motion, AnimatePresence} from "framer-motion";

export default function College() {
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
                <motion.div variants={container} animate="visible" initial="hidden" className='balance text-xl p-3 font-bold '> <b className='text-black px-2'>College</b></motion.div>
                <div className='budget-settings w-20 p-3 rounded-full bg-gray-400 hover:bg-[#ad112b] hover:text-white'> ⚙</div>
            </div>
       
            <motion.div variants={item} className='row3 mt-20 flex justify-around'>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                    <b>Scholarships</b>
                    <ul>
                        <motion.li variants={item}><b>Obtaining college scholarships might be a beneficial method to fund your education. Begin by exploring scholarship possibilities that fit your interests and achievements. Check your eligibility and write a great application that highlights your abilities and ambitions. Apply for as many scholarships as you can and make sure you fulfill all deadlines. 
</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >Type of Degrees</b>
                    <ul>
                        <motion.li variants={item}><b>
There are different types of degrees in higher education. An associate degree takes two years and provides the basics for a career. A bachelor's degree is four years and offers a broader education. A graduate degree is a specialized program for those who have a bachelor's degree. A Ph.D. is obtained after a graduate degree and requires more research and study in a specific area.</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >Student Debt</b>
                    <ul>
                        <motion.li variants={item}><b className='txt-sm'> Going to college costs money, and many students borrow money called student loans to pay for it. After graduation, they have to start paying back the loans with interest, which can be difficult. Delaying payments can increase the loan balance, so it's important to manage the debt and make payments on time. If they struggle to pay, there are options to postpone or reduce payments, but it's best to talk to the loan servicer or look into programs that can help forgive the loans.</b></motion.li>
                        
                    </ul>
                </motion.div>
                
            </motion.div>
            
            <div className='row2 flex justify-center'>
                <motion.div variants={container} animate="visible" initial="hidden" className='task-bar'>
                    <ul>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💰</div>
                            <div className='task-info'>What are some suggestions for getting college scholarships?</div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[85%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 85%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💳</div>
                            <div className='task-info'> What are the many sorts of degrees available in higher education?</div> 
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="w-[45%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'> 📖</div>
                            <div className='task-info'>How should students deal with their college debt? </div>
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
