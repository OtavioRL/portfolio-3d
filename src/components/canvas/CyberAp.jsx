/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types"
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const CyberAp = ({ isMobile }) => {
  const cyberAp = useGLTF('/cyberpunk_micro-apartments/scene.gltf');
  

  return (
    <mesh>
      <hemisphereLight 
        intensity={1.5}
        groundColor="black"
      />
      <pointLight intensity={1} />
      {/* <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive 
        object={cyberAp.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [0, -2, -0.3] : [0, -3, -0.3]}
        rotation={[0.01, -4, 0.01]}
      />
    </mesh>
  )
}

CyberAp.propTypes = {
  isMobile: PropTypes.bool
}

const CyberApCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 870px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CyberAp isMobile={isMobile}/>
      </Suspense>
      <Preload aLL/>
    </Canvas>
  )
};

export default CyberApCanvas;