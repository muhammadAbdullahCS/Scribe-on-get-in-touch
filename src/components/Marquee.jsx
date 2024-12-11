import React from 'react'
import {motion} from "framer-motion"

const Marquee = ({images, from, to}) => {

 


  return (
    <div className='container mx-auto max-xsml:mt-24 overflow-x-hidden'>
        <div className='flex'>
            <motion.div initial={{ x: `${from}` }} animate={{x: `${to}`}} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className='flex justify-end flex-shrink-0'>
                {images.map((img, index)=>{
                    return <img className="h-50 w-56 4k2:w-96 pr-32" src={img} alt="" key={index}/>
                })}
            </motion.div>
            <motion.div initial={{ x: `${from}` }} animate={{x: `${to}`}} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className='flex justify-end flex-shrink-0'>
                {images.map((img, index)=>{
                    return <img className="h-50 w-56 4k2:w-96 pr-32" src={img} alt="" key={index}/>
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default Marquee