import {userState, useRef, Suspense} from 'react';
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {Points, PointMaterial, Preload, Point, useGLTF} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion';

import CanvasLoader from '../Loader';

const Clouds = (props) => {
  const clouds = useGLTF('./stylized_clouds/scene.gltf')

  return (
    // <primitive object={clouds.scene} scale={0.5} position-y={-2} position-x={-5} rotation-y={0}/>
    <mesh>
      <hemisphereLight intensity={0.3} groundColor='#2d648a' />
      <pointLight intensity={1}/>
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={2}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={clouds.scene}
        scale={  2.5}
        position={ [-2, -2, -2]}
        rotation={[-0.6, -0.2, -0.1]}
      />
    </mesh>
  )
}

const CloudsCanvas = () => {
    return (
      
      <div className='w-full h-full absolute inset-0 z-[-1] sky'>
        <motion.div initial={{ x: -800 }} animate={{ x: 1000 }}
            transition={{duration: 50, delay: 0, ease: "easeIn", repeat:'loop'}}>
          <Canvas className='h-full' camera={{ fov:45, near:0.1, far: 200, position: [-4, 4,6]}}>
            <Suspense fallback={null}>
              <Clouds/>
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    )
  }
  export default CloudsCanvas