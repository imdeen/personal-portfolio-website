import React from 'react'
import Typewriter from 'typewriter-effect'

const Type = () => {
  return (

    <Typewriter
      options={{
        strings: ['Web Development',
          'Backend Development', 'illustration'],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  )


}

export default Type