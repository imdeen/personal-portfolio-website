import React from 'react'
import './Hero.css'
import { motion } from "framer-motion";
import Type from '../Type/Type'
import Macbook from '../Macbook/Macbook';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { FaLaptopCode } from 'react-icons/fa'


const Hero = () => {
  return (
    <section>
      <div className='top-paddings h-wrapper'>
        {/* left side */}

        <motion.div
          initial={{ x: "-4rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 6,
            type: "spring",
          }}
          className="left-side"
        >


          <h1 className='primaryText'>
            hi, i am <span className="aquaText" >
              deen</span>
          </h1>

          <p className='secondaryText'>i am proficient in<span className='aquaText2 flexCenter'><Type /> </span> </p>
        </motion.div>


        {/* right side */}
        <motion.div
          initial={{ x: "4rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 6,
            type: "spring",
          }}
          className='right-side'
        >
          <Macbook />
        </motion.div>

      </div>

      <motion.div
        initial={{ x1: "4rem", opacity: 0 }}
        animate={{ x1: 0, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}

        className='big-icons'>
        <a className='big-icon' href="/"><AiOutlineHome size={50} />Home</a>
        <a href="/Project"><FaLaptopCode size={50} />Project</a>
        <a href="/About"><AiOutlineUser size={50} />About</a>
        <a href="/Contact"><AiOutlinePhone size={50} /><span>Contact</span></a>


      </motion.div>
    </section>
  )
}

export default Hero