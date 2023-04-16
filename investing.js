import React from 'react'
import {motion, AnimatePresence} from "framer-motion";

export default function Investing() {
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
                <motion.div variants={container} animate="visible" initial="hidden" className='balance text-xl p-3 font-bold '> <b className='text-black px-2'>Investing:</b>$323.00</motion.div>
                <div className='budget-settings w-20 p-3 rounded-full bg-gray-400 hover:bg-[#ad112b] hover:text-white'> ⚙</div>
            </div>
       
            <motion.div variants={item} className='row3 mt-20 flex justify-around'>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                    <b >Crypto</b>
                    <ul>
                        <motion.li variants={item}><b>The potential for large profits in cryptocurrencies is one reason for investing in them. In addition, cryptocurrencies may give a level of security and anonymity that conventional banking systems may not.</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >Stocks</b>
                    <ul>
                        <motion.li variants={item}><b>Investing in a stock can potentially provide a way to grow your wealth over time. When you buy a stock, you're essentially buying a small ownership stake in a company. Additionally, some companies also pay out dividends to shareholders, which can provide a regular stream of income</b></motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={container}  animate="visible" initial="hidden" className='budget-item'>
                <b >REITS</b>
                    <ul>
                        <motion.li variants={item}><b className='txt-sm'> A way to invest in real estate without the inconvenience and expense of owning actual property is by purchasing Real Estate Investment Trusts.</b></motion.li>
                        
                    </ul>
                </motion.div>
                
            </motion.div>
            
            <div className='row2 flex justify-center'>
                <motion.div variants={container} animate="visible" initial="hidden" className='task-bar'>
                    <ul>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💰</div>
                            <div className='task-info'>Look up and provide instances of growth stocks, such as Apple </div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="w-[85%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 85%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'>💳</div>
                            <div className='task-info'> What are some of the advantages of investing in REITs rather than buying actual real estate?</div>
                            <div className='progress-bar'>
                                <div className="w-20 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="w-[45%] bg-red-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 45%</div>
                                </div>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className='task-item'>
                            <div className='task-img text-3xl'> 📖</div>
                            <div className='task-info'>Identify the top investment sectors </div>
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
