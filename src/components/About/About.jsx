import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section>
      <div className='main top-paddings'>
        {/* left side */}
        <motion.div
          initial={{ x: "-2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
          className='left'>
          <img className='main-images' src='./about.svg' alt="developer-image" />
        </motion.div>


        {/* right side */}
        <motion.div
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
          className='right'>
          <h1 className='aquaText2'>About me ?</h1>
          <p className='secondaryText'>Hello, and welcome to my website! My name is Deen Mohammad, and I live in Delhi, India.
            I am a passionate full-stack web developer with a love for creating innovative,
            user-friendly websites.</p>


        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
      >
        <h1 className='primaryText t-center'>
          Hobbies
        </h1>
      </motion.div>



      <div className='main'>
        {/* left */}
        <motion.div
          initial={{ x: "-2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
        >
          <h1 className='aquaText2'>Paintings</h1>
          <p className='secondaryText'>I have been interested in art since I was a child,
            and painting has always been a way for me to express my creativity and emotions.
            When I'm not busy coding, you can often find me in my art studio, working on a
            new painting or experimenting with different techniques and styles.</p>


        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
        >
          <img className='main-images' src="./artist.svg" alt="artist-image" />

        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
        className='t-center'>
        <h3 className='aquaText2'>these are digitally painted by me</h3>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
        className='paintings'>
        <img src="./myart/shgv2.jpg" alt="" />
        <img src="./myart/ds2.jpg" alt="" />
        <img src="./myart/quick_sketch.jpg" alt="" />
        <img src="./myart/siri-wild_hunt.jpg" alt="" />
      </motion.div>

      {/* <h1 className='primaryText hobby-heading top-paddings2 t-center'>
        Reading
      </h1> */}

      <div className='main top-paddings'>
        {/* left side */}
        <motion.div
          initial={{ x: "-2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
        >
          <img className='main-images' src="./reading.svg" alt="reading-image" />

        </motion.div>


        {/* right  side */}
        <motion.div
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}>

          <h1 className='aquaText2'>Reading</h1>
          <p className='secondaryText'>I'm also an avid reader and love exploring new ideas through
            books. I enjoy a wide variety of genres, from classic literature to science fiction and
            fantasy. Reading allows me to broaden my horizons, develop my critical thinking skills,
            and gain new perspectives on the world around me.</p>



        </motion.div>
      </div>
    </section>
  )
}

export default About