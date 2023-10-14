import {userState, useRef, Suspense} from 'react';
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {Points, PointMaterial, Preload, Point, useGLTF} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
// import {theme} from '../Navbar';
import CanvasLoader from '../Loader';

const Clouds = (props) => {
  const clouds = useGLTF('./stylized_clouds/scene.gltf')
  // const clone = useMemo(() => clouds.scene.clone(), [clouds])
  
  // const handleCloud = ()  => {
  //   if (theme === 'dark') {
  //     return (<spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.5}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //       />)
  //   } else {
  //     return (<spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.5}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //       />)
     
  //   }
  // }
  return (
    // <primitive object={clouds.scene} scale={0.5} position-y={-2} position-x={-5} rotation-y={0}/>
    <mesh>
      <hemisphereLight intensity={0.2} groundColor='#535a5e' />
      <pointLight intensity={0.5}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive
          object={clouds.scene}
          scale={  0.50}
          position={ [-1, 11, -2]}
          rotation={[-0.5, -0.2, -0.1]}
          />
    </mesh>
  )
}

const CloudsCanvas = () => {
    return (
      
      <div className='w-full h-[110%] absolute inset-0 sky overscroll-contain overflow-hidden dark:bg-blue-400'>
        <motion.div initial={{ x: -600 }} animate={{ x: 1500 }}
            transition={{duration: 50, delay: 0, ease: "easeIn", repeat:'loop'}} className='relative w-full h-full p-20 '>
          <Canvas className='h-full' camera={{ fov:120, near:0.01, far: 200, position: [-8, 8,12]}}>
            <Suspense fallback={null}>
              <Clouds className='dark:'/>
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    )
  }
  export default CloudsCanvas