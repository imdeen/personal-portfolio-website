import React, { Suspense } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import MacBook from './Mac-draco.jsx'
import './Macbook.css'
import CanvasLoader from '../Loader/Loader'

const Macbook = () => {
  return (
    <div className='macbook'>
      <Canvas camera={{ fov: 40, zoom: 1, near: 1, far: 1000 }}>
        <Suspense fallback={<CanvasLoader/>}>
          <Stage environment="city" intensity={0.6}>
            <MacBook />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Macbook