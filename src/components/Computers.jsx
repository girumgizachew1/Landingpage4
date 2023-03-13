import { Suspense, useEffect, useState } from "react" 
import {Canvas , useFrame} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './loader'
import { useRef } from 'react';




const Computers = () => {
    const meshRef = useRef();
    const watch =useGLTF('./applewatch/scene.gltf')
    const [rotation, setRotation] = useState(0)
    
    useFrame(({ clock }) => {
       // set rotation based on clock elapsed time
        setRotation(Math.sin(clock.elapsedTime * 2) * 0.2)
      })

      useFrame(({ clock }) => {
        const scrollPosition = window.scrollY;
        const newScale = 30 + scrollPosition * 0.035;
        const newPosition = [0, -scrollPosition * 0.005, scrollPosition * 0.003];
        const newRotation = [0.25-scrollPosition * 0.00186, 0.4 - scrollPosition * 0.001, - scrollPosition * 0.0002];
      
        setRotation(Math.sin(clock.elapsedTime * 2) * 0.2);
        meshRef.current.scale.set(newScale, newScale, newScale);
        meshRef.current.position.set(...newPosition);
        meshRef.current.rotation.set(...newRotation);
      });
  
   
    return (
    <mesh rotation-y={rotation} ref={meshRef}>
        <hemisphereLight intensity={1.2} groundColor="black" />
        <pointLight intensity={1.2}/>
        <primitive
         object={watch.scene}
         scale={1}
         rotation={[0.25, 0.5, 0]}
         position={[0,0, 0]}
        />
        
    </mesh>
  )
}

const ComputerCanvas =()=>{
     return(

         <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov:25  }}
            gl={{preserveDrawingBuffer:true}}
         >
             <Suspense fallback={"hey"} >
                <Computers/>
             </Suspense>
             <Preload all />
         </Canvas>
     )
}
export default ComputerCanvas