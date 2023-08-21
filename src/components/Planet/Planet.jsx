import React, { Suspense } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Planet from './SceneDraco'
import CanvasLoader from '../Loader/Loader'


const PlanetModel = () => {


  return (




    <div style={{ width: "50vw", height: "50vh" }}>
      <Canvas shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <Stage environment="city" intensity={0.6}>
            <Planet />
          </Stage>
          <OrbitControls
            enableZoom={false} autoRotate={true}

          />

        </Suspense>
      </Canvas>
    </div>
  )
}

export default PlanetModel