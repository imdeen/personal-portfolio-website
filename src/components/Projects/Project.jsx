import React from 'react'
import { Tilt } from 'react-tilt'
import './Project.css'
import Tech from '../Tech/Tech'
import { projects } from '../../constant/constant'
import github from '../../assets/github.svg'
import { motion } from 'framer-motion'

const ProjectCard = ({ name, description, image, source_code_link,link }) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <motion.div
          initial={{ y: "4rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: "ease-in",
          }}
          className='projectCard'>
          <div onClick={() => window.open(link)}
          className='card'>
          
            <img src={image} alt={name} />
          </div>

          <div
            onClick={() => window.open(source_code_link,  '_blank')}
            className='github'
          >
            <img src={github} alt="github" />
          </div>

          <div

          >
            <h3 className='h-card'>{name}</h3>
            <p className='p-card'>{description}</p>
          </div>
        </motion.div>

      </Tilt>
    </div>
  )
}

const Project = () => {
  return (
    <section className='top-paddings'>
      <div className='p-wrapper'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
          }}

          className='aquaText t-center'>Projects</motion.h1>

        <div
        className='paddings project'>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}

        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring"
          }}
          className='aquaText t-center top-paddings'>tech stack</motion.h1>
        <motion.div
          initial={{ y: "4rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className='tech-balls'>
          <Tech />
        </motion.div>


      </div>
    </section>
  )
}

export default Project